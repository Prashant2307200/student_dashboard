import type { NextFunction, Request, Response } from "express";
import { StudentService } from "../services/student.service.js";
import ExpressError from "../utils/ExpressError.util.js";

export class StudentController {
  private studentService: StudentService;

  constructor(studentService: StudentService) {
    this.studentService = studentService;
  }

  async getAllStudents(req: Request, res: Response, next: NextFunction) {
    try {
      const students = await this.studentService.getAllStudents();
      res.status(200).json(students);
    } catch (error) {
      next(new ExpressError("Error fetching students", 500));
    }
  }

  async createStudent(req: Request, res: Response, next: NextFunction) {
    try {
      const studentData = req.body;
      const newStudent = await this.studentService.createStudent(studentData);
      res.status(201).json(newStudent);
    } catch (error) {
      next(new ExpressError("Error creating student", 500));
    }
  }
}