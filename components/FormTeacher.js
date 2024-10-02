import { createElement, useState } from "react";

export default function FormTeacher({ onSubmit }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(state);
  };

  const [state, setState] = useState({
    name: "",
    age: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  return createElement("form", { onSubmit: handleSubmit }, [
    createElement("fieldset", {}, [
      createElement("legend", {}, "Add Teacher"),
      createElement("input", {
        type: "text",
        name: "name",
        placeholder: "Enter your name",
        onChange: handleChange,
        value: state.name || "",
      }),
      createElement("input", {
        type: "number",
        name: "age",
        placeholder: "Enter your age",
        onChange: handleChange,
        value: state.age || "",
      }),
      createElement("button", { type: "submit" }, "Add teacher"),
    ]),
  ]);
}
