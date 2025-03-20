const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));

let submissions = [];

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.post("/submit", (req, res) => {
  const { name, email, message } = req.body;
  submissions.push({ name, email, message });
  res.render("Thank", { name });
});

app.get("/submissions", (req, res) => {
  res.json(submissions);
});

app.listen(3000, () => {
  console.log("http://localhost:3000/contact");
});
