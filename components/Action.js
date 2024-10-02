import { createElement } from "react";

export function Action() {

    



  return createElement("div", {}, [
    createElement("button", {type:'button',onClick:}, "Edit"),
    createElement("button", {type:'button',onClick:}, "Delete"),
  ]);
}
