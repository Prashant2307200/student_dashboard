import { prisma } from "../config/db.config.js";
import logger from "../config/pino.config.js";

interface CreateStudentData {
  studentName: string;
  cohort: string;
  courses: string[];
  dateJoined: string;
  lastLogin: string;
  status: boolean;
}

export class StudentService {
  private prisma = prisma;

  getAllStudents() {
    try {
      return this.prisma.user.findMany();
    } catch (error) {
      logger.error("Error fetching students: ", error);
      throw new Error("Failed to fetch students");
    }
  }

  createStudent(studentData: CreateStudentData) {
    try {
      return this.prisma.user.create({
        data: studentData
      });
    } catch (error) {
      logger.error("Error creating student: ", error);
      throw new Error("Failed to create student");
    }
  }
}
