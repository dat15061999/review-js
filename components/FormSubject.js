import { createElement, useEffect, useState } from "react";

export default function FormSubject({ onSubmit, content, listStudent }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(state);
  };

  const [state, setState] = useState({
    math: "",
    eng: "",
    phy: "",
    id: "",
  });

  const [students, setStudents] = useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setState({
      ...state,
      [name]: value,
    });
  };

  const handleChangeSelect = (event) => {
    const { name, value } = event.target;

    const currentPoint = students.find((s) => s.id === value).scores.score;

    setState({
      math: currentPoint.mathematics ?? 0,
      eng: currentPoint.english ?? 0,
      phy: currentPoint.physics ?? 0,
      [name]: value,
    });
  };

  useEffect(() => {
    setState({ ...content });

    if (listStudent && listStudent.length > 0) {
      setStudents(listStudent);
    }
  }, [content, listStudent]);

  const fetchOption = (studentList) => {
    return studentList.map((s) =>
      createElement("option", { value: s.id }, s.name)
    );
  };

  return createElement("form", { onSubmit: handleSubmit }, [
    createElement("fieldset", {}, [
      createElement("legend", {}, "Update point"),
      createElement(
        "select",
        { name: "id", value: state.id, onChange: handleChangeSelect },
        [
          createElement("option", { value: "" }, "Please choose student"),
          students && students.length > 0 ? fetchOption(students) : "",
        ]
      ),
      createElement("input", {
        type: "number",
        min: 0,
        name: "math",
        onChange: handleChange,
        placeholder: "Math",
        value: state.math,
      }),
      createElement("input", {
        type: "number",
        min: 0,
        name: "eng",
        onChange: handleChange,
        placeholder: "Eng",
        value: state.eng,
      }),
      createElement("input", {
        type: "number",
        min: 0,
        name: "phy",
        onChange: handleChange,
        placeholder: "Phy",
        value: state.phy,
      }),
      createElement("button", { type: "submit" }, "Update point"),
    ]),
  ]);
}
