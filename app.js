console.log("My_Pug_UI");
const express = require("express");
const app = express();
const fs = require("fs");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const port = 3500;

app.set("view engine", "pug");
app.set("views", "./views");
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});
app.get("/gallery", (req, res) => {
  res.render("gallery");
});
app.get("/services", (req, res) => {
  res.render("services");
});
app.get("/aboutus", (req, res) => {
  res.render("aboutus");
});
app.get("/details", (req, res) => {
  res.render("details");
});

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`server in running on port ${port}`);
  }
});

app.post("/postdata", (req, res) => {
  let name = req.body.name;
  let email = req.body.email;
  let subject = req.body.subject;
  let comments = req.body.comments;
  let data = `
  <tr>
    <td>${name}</td>
    <td>${email}</td>
    <td>${subject}</td>
    <td>${comments}</td>
  <tr>
      `;
  if (fs.existsSync(`./user`)) {
    fs.appendFileSync(`./user/detail.pug`, data);
    res.render("form-submitted");
  } else {
    fs.mkdirSync(`./user/`);
    fs.writeFileSync(`./user/detail.pug`, `${data.toString()}`);
    res.send("CREATE FILE OF CONTACT");
  }
});
