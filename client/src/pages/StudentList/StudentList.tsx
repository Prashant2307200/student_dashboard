import { useState } from "react";
import StudentTable from "@/components/StudentList/StudentTable";
import StudentOptions from "@/components/StudentList/StudentOptions";
import AddStudentDialog from "@/components/StudentList/AddStudentDialog";

export default function StudentList() {
  const [isDialogOpen, setIsDialogOpen] = useState(false); 

  return (
    <section id="student-list" className="flex flex-col flex-1 p-4">
      <div className="options flex justify-between">
        <div className="flex items-center gap-3">
          <StudentOptions label="AY 2024-25" />
          <StudentOptions label="CBSE 9" />
        </div>
        <div>
          <button
            className="font-medium text-gray-700 px-4 py-2 rounded flex gap-2 items-center"
            onClick={() => setIsDialogOpen(true)}
          >
            <img src="/add.svg" alt="add" />
            Add New Student
          </button>
        </div>
      </div>
      <StudentTable />
      <AddStudentDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)} 
      />
    </section>
  );
}
