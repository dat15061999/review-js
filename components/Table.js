import { createElement } from "react";

export default function Table({ data, columns, handleEdit, handleDelete }) {
  const update = (content) => {
    handleEdit(content);
  };

  const deleted = (content) => {
    handleDelete(content.id);
  };

  const actions = (content) => {
    return [
      createElement(
        "button",
        { type: "button", onClick: () => update(content) },
        "Edit"
      ),
      createElement(
        "button",
        { type: "button", onClick: () => deleted(content) },
        "Delete"
      ),
    ];
  };

  return createElement("table", {}, [
    createElement("thead", {}, [
      createElement(
        "tr",
        {},
        columns.map((column) => createElement("th", {}, column))
      ),
    ]),
    createElement(
      "tbody",
      {},
      data.map((row) => {
        return createElement(
          "tr",
          {},
          columns.map((column) => {
            return createElement("td", {}, [
              column === "Actions" ? actions(row[column]) : row[column],
            ]);
          })
        );
      })
    ),
  ]);
}
