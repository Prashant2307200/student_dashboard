import { 
  Table, 
  TableHeader, 
  TableRow, 
  TableBody, 
  TableCell, 
  TableHead 
} from "@/components/ui/table"; 

import List from "../List";

import { useGetStudentsQuery } from "@/redux/api/student.slice";
import Loader from "@/components/Loader";
import Error from "@/components/Error"; 

interface IStudent {
  id: number;
  studentName: string;
  cohort: string;
  courses: string[];
  dateJoined: string;
  lastLogin: string;
  status: boolean;
}

export default function StudentTable() {

  const {
    data,
    isLoading,
    isError
  } = useGetStudentsQuery('');

  if (isLoading) 
    return <Loader />;
  
  if (isError) 
    return 
      <Error 
        message= 'Something went wrong'
      />;

  return (
    <div className="student-list pt-4">
      <Table className="text-[12px]">
        <TableHeader>
          <TableRow>
            <TableHead className="font-medium text-black">Student Name</TableHead>
            <TableHead className="font-medium text-black">Cohort</TableHead>
            <TableHead className="font-medium text-black">Courses</TableHead>
            <TableHead className="font-medium text-black">Date Joined</TableHead>
            <TableHead className="font-medium text-black">Last Login</TableHead>
            <TableHead className="font-medium text-black">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <List 
            data={data}
            getKey={(item: IStudent) => item.id}
            getRow={(item: IStudent) => (
              <TableRow key={item.id}>
                <TableCell>{item.studentName}</TableCell>
                <TableCell>{item.cohort}</TableCell>
                <TableCell className="flex gap-2">
                  <span className="flex gap-1 bg-slate-100 p-1 rounded">
                    <img src="/sciteacher.svg" alt="sciteacher" />
                    {item.courses[0]}
                  </span>
                  <span className="flex gap-1 bg-slate-100 p-1 rounded">
                    <img src="/mathteacher.svg" alt="mathteacher" />
                    {item.courses[1]}
                  </span>
                </TableCell>
                <TableCell>{item.dateJoined}</TableCell>
                <TableCell>{item.lastLogin}</TableCell>
                <TableCell>
                  <div
                    className={`rounded-full h-3 w-3 ${item.status ? "bg-[#4AEA40]" : "bg-[#EA4E40]"
                      }`}
                  >
                  </div>
                </TableCell>
              </TableRow>
            )}
          />
        </TableBody>
      </Table>
    </div>
  )
}
