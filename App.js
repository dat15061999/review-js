import { createElement, useEffect, useState } from "react";

import Table from "./components/Table.js";
import Form from "./components/Form.js";
import FormTeacher from "./components/FormTeacher.js";
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

  const resetEdit = () => {
    setEdit({
      name: "",
      age: "",
      id: "",
    });
  };

  const resetEditStudent = () => {
    setEditStudent({
      name: "",
      age: "",
      id: "",
    });
  };

  useEffect(() => {
    resetEdit();
    resetEditStudent();
  }, []);

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
