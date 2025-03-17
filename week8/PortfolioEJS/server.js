const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

const Projects = [
  {
    title: "Color Picker",
    content:
      "a simple and interactive color picker tool that allows users to select a color and see the result in multiple formats (hexadecimal, RGB, and HSL).",
    date: "2024-01-01",
    link: "https://github.com/MinOkkar/Color-Picker-HTML",
  },
  {
    title: "Movie Review Website",
    content: "Simple TML CSS movie review website",
    date: "2024-01-02",
    link: "https://github.com/MinOkkar/Movie-Review-Website-",
  },
  {
    title: "FastAPI-ORM ",
    content:
      "This is a FastAPI project that allows you to manage an anime list with genres, using SQLAlchemy to interact with a MySQL database.",
    date: "2024-01-02",
    link: "https://github.com/MinOkkar/FastAPI-ORM",
  },
  {
    title: "Phonix",
    content:
      "A efficient Phone Book Management System built with Python, utilizing Binary Search Tree (BST) data structure for storing and managing contacts. ",
    date: "2024-01-02",
    link: "https://github.com/MinOkkar/Phonix",
  },
];

app.get("/project", (req, res) => {
  res.render("project", { Projects });
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000/project");
});
