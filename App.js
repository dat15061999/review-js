import { createElement, useEffect, useState } from "react";

import Table from "./components/Table.js";
import Form from "./components/Form.js";
import FormTeacher from "./components/FormTeacher.js";
import FormSubject from "./components/FormSubject.js";
import { Class } from "./models/Class.js";
import { Student } from "./models/Student.js";
import { Teacher } from "./models/teacher.js";

export default function App({ students, subjects, teachers }) {
  const [classA] = useState(() => new Class(students, teachers));

  const columns = [
    "Name",
    "Age",
    "Mathematics",
    "English",
    "Physics",
    "Average",
    "Actions",
  ];

  const columns2 = ["Name", "Age", "Actions"];

  const [data, setData] = useState(classA.toDataTable());

  const [data2, setData2] = useState(classA.toDataTableTeacher());

  const [edit, setEdit] = useState();

  const [editStudent, setEditStudent] = useState();

  const [editPoint, setEditPoint] = useState();

  const [listStudent, setListStudent] = useState();

  const resetEdit = () => {
    setEdit({
      name: "",
      age: "",
      id: "",
    });
  };

  useEffect(() => {
    setListStudent(classA.getStudents());
  }, [data]);

  const resetEditStudent = () => {
    setEditStudent({
      name: "",
      age: "",
      id: "",
    });
  };

  const resetEditPoint = () => {
    setEditPoint({
      math: "",
      eng: "",
      phy: "",
      id: "",
    });
  };

  return createElement("section", {}, [
    createElement("h1", {}, "School"),
    createElement("p", {}, "Welcome to the school"),
    createElement(Form, {
      onSubmit: (value) => {
        if (!value.name || !value.age) {
          return;
        }

        value.id
          ? classA.updateStudent(value)
          : classA.addStudent(new Student(value.name, value.age, {}));
        setData(classA.toDataTable());

        resetEditStudent();
      },
      content: editStudent,
    }),
    createElement(FormSubject, {
      onSubmit: (value) => {
        if (!value.id) {
          return;
        }

        classA.updateStudentPoint(value);
        setData(classA.toDataTable());
        resetEditPoint();
      },
      content: editPoint,
      listStudent: listStudent,
    }),
    createElement("hr"),
    createElement("h2", {}, "Students"),
    createElement(Table, {
      data,
      columns,
      handleEdit: (content) => {
        setEditStudent({ ...content });
      },
      handleDelete: (id) => {
        classA.removeStudentById(id);
        setData(classA.toDataTable());
        resetEditStudent();
      },
    }),
    createElement("hr"),
    createElement("h2", {}, "Teachers"),
    createElement(FormTeacher, {
      onSubmit: (value) => {
        if (!value.name || !value.age) {
          return;
        }

        value.id
          ? classA.updateTeacher(value)
          : classA.addTeacher(new Teacher(value.name, value.age));
        setData2(classA.toDataTableTeacher());
        resetEdit();
      },
      content: edit,
    }),
    createElement(Table, {
      data: data2,
      columns: columns2,
      handleEdit: (content) => {
        setEdit({ ...content });
      },
      handleDelete: (id) => {
        classA.removeTeacherById(id);
        setData2(classA.toDataTableTeacher());
        resetEdit();
      },
    }),
    createElement("hr"),
  ]);
}
