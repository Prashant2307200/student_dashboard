import React from "react";
import { useForm, FieldValues } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription, 
  DialogFooter 
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAddStudentMutation } from "@/redux/api/student.slice"; 
import { toast } from "react-toastify";

interface AddStudentDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormInputs extends FieldValues {
  studentName: string;
  cohort: string;
  courses: string;
  status: boolean;
}

const AddStudentDialog: React.FC<AddStudentDialogProps> = ({ isOpen, onClose }) => {
  const { 
    register, 
    handleSubmit, 
    reset, 
    formState: { errors, isSubmitting } 
  } = useForm<FormInputs>();
  
  const [addStudent] = useAddStudentMutation();  

  const onSubmit = async (data: any) => {
    try {
      data.courses = data.courses.split(",").map((course: string) => course.trim());
      await addStudent(data).unwrap();
      toast.success("New student added successfully!");
      reset();
      onClose();
    } catch (error) {
      toast.error("Failed to add student. Please try again.");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Student</DialogTitle>
          <DialogDescription>Fill in the details below to add a new student.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <Label htmlFor="studentName">Student Name</Label>
            <Input
              id="studentName"
              {...register("studentName", { required: "Student Name is required." })}
              className={errors.studentName ? "border-red-500" : ""}
            />
            {errors.studentName && (
              <p className="text-sm text-red-500">
                {String(errors.studentName.message)}
              </p>
            )}
          </div>
          <div>
            <Label htmlFor="cohort">Cohort</Label>
            <Input
              id="cohort"
              {...register("cohort", { required: "Cohort is required." })}
              className={errors.cohort ? "border-red-500" : ""}
            />
            {errors.cohort && (
              <p className="text-sm text-red-500">
                {String(errors.cohort.message)}
              </p>
            )}
          </div>
          <div>
            <Label htmlFor="courses">Courses (comma separated)</Label>
            <Input
              id="courses"
              {...register("courses", { required: "Courses are required." })}
              className={errors.courses ? "border-red-500" : ""}
            />
            {errors.courses && (
              <p className="text-sm text-red-500">
                {String(errors.courses.message)}
              </p>
            )}
          </div> 
          <div className="flex items-center space-x-2">
            <Label htmlFor="status">Active Status</Label>
            <input
              type="checkbox"
              id="status"
              {...register("status")}
              className="rounded border-gray-300 text-primary focus:ring-primary"
            />
          </div>
          <DialogFooter>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Adding..." : "Add Student"}
            </Button>
            <Button variant="outline" onClick={onClose} disabled={isSubmitting}>
              Cancel
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddStudentDialog;
