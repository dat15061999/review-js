import React, { createElement } from "react";
import ReactDOM from "react-dom";

import App from "./App.js";

const students = [
  {
    name: "John Doe",
    age: 20,
    scores: {
      mathematics: 90,
      english: 80,
      physics: 85,
    },
    id: crypto.randomUUID(),
    teacherId: "teacher-1",
  },
  {
    name: "Jane Doe",
    age: 21,
    scores: {},
    id: crypto.randomUUID(),
    teacherId: "teacher-1",
  },
  {
    name: "James Doe",
    age: 22,
    scores: {
      english: 70,
    },
    id: crypto.randomUUID(),
    teacherId: "teacher-2",
  },
];

const teachers = [
  {
    name: "Teacher 1",
    id: "teacher-1",
    age: 22,
    subjects: ["mathematics", "english", "physics"],
  },
  {
    name: "Teacher 2",
    age: 22,
    id: "teacher-2",
    subjects: ["english"],
  },
];

const subjects = [
  {
    name: "Mathematics",
    id: "mathematics",
  },
  {
    name: "English",
    id: "english",
  },
  {
    name: "Physics",
    id: "physics",
  },
];

ReactDOM.render(
  createElement(App, { subjects, students, teachers }),
  document.getElementById("app")
);
