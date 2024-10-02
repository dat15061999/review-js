import { createElement } from "react";

export default function Table({ data, columns, handleEdit, handleDelete }) {
  const update = (id) => {
    handleEdit(id);
  };

  const deleted = (id) => {
    handleDelete(id);
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
              column === "Edit"
                ? createElement(
                    "button",
                    { type: "button", onClick: () => update(row[column]) },
                    "Edit"
                  )
                : column === "Delete"
                ? createElement(
                    "button",
                    { type: "button", onClick: () => deleted(row[column]) },
                    "Delete"
                  )
                : row[column],
            ]);
          })
        );
      })
    ),
  ]);
}
