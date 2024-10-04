import { Student } from "./student.js";
import { Teacher } from "./teacher.js";

export class Class {
  constructor(students = [], teachers = []) {
    this.students = students.map(
      (student) => new Student(student.name, student.age, student.scores)
    );

    this.teachers = teachers.map(
      (teacher) => new Teacher(teacher.name, teacher.age, teacher.id)
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

  removeStudentById(id) {
    this.students = this.students.filter((s) => s.id !== id);
  }

  removeTeacherById(id) {
    this.teachers = this.teachers.filter((t) => t.id !== id);
  }

  removeStudent(student) {
    return this.removeStudentById(student.id);
  }

  updateStudentById(id, student) {
    this.students.map((s) => {
      if (s.id === id) {
        s.name = student.name;
        s.age = student.age;
      }
    });
  }

  updateStudent(student) {
    return this.updateStudentById(student.id, student);
  }

  updateStudentPoint(student) {
    const point = {
      mathematics: Number(student.math),
      english: Number(student.eng),
      physics: Number(student.phy),
    };

    this.students.map((s) => {
      if (s.id === student.id) {
        s.scores.score = point;
      }
    });
  }

  updateTeacher(teacher) {
    this.teachers.map((s) => {
      if (s.id === teacher.id) {
        s.name = teacher.name;
        s.age = teacher.age;
      }
    });
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
        Actions: student,
      };
    });
  }

  toDataTableTeacher() {
    return this.teachers.map((teacher) => {
      return {
        Name: teacher.name,
        Age: teacher.age,
        Actions: teacher,
      };
    });
  }
}
