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
  ];

  const columns2 = ["Name", "Age", "Actions"];

  const [data, setData] = useState(classA.toDataTable());

  const [data2, setData2] = useState(classA.toDataTableTeacher());

  const [edit, setEdit] = useState();

  const resetEdit = () => {
    setEdit({
      name: "",
      age: "",
      id: "",
    });
  };

  useEffect(() => {
    resetEdit();
  }, []);

  return createElement("section", {}, [
    createElement("h1", {}, "School"),
    createElement("p", {}, "Welcome to the school"),
    createElement(Form, {
      onSubmit: (value) => {
        classA.addStudent(new Student(value.name, value.age, {}));
        setData(classA.toDataTable());
      },
    }),
    createElement("hr"),
    createElement("h2", {}, "Students"),
    createElement(Table, { data, columns }),
    createElement("hr"),
    createElement("h2", {}, "Teachers"),
    createElement(FormTeacher, {
      onSubmit: (value) => {
        console.log(value.id ? true : false);

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
      },
    }),
    createElement("hr"),
  ]);
}
