import { Student } from "./student.js";
import { Teacher } from "./teacher.js";

export class Class {
  constructor(students = [], teachers = []) {
    this.students = students.map(
      (student) => new Student(student.name, student.tuoi, student.scores)
    );

    this.teachers = teachers.map(
      (teacher) => new Teacher(teacher.name, teacher.age)
    );
  }

  addStudent(student) {
    this.students.push(student);
  }

  // Other methods
  findStudentById(id) {}

  findStudent(student) {
    return this.findStudentById(student.id);
  }

  removeStudentById(id) {}

  removeStudent(student) {
    return this.removeStudentById(student.id);
  }

  updateStudentById(id, student) {}

  updateStudent(student) {
    return this.updateStudentById(student.id, student);
  }

  getStudents() {
    return this.students;
  }

  addTeacher(teacher) {
    this.teachers.push(teacher);
  }

  toDataTable() {
    return this.students.map((student) => {
      return {
        Name: student.name,
        Age: student.age,
        Mathematics: student.getScore("mathematics"),
        English: student.getScore("english"),
        Physics: student.getScore("physics"),
        Average: student.getAverage(),
      };
    });
  }

  toDataTableTeacher() {
    return this.teachers.map((teacher) => {
      return {
        Name: teacher.name,
        Age: teacher.age,
      };
    });
  }
}
