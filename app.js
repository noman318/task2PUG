console.log("My_Pug_UI");
const express = require("express");
const app = express();
const fs= require('fs');
app.use(express.json());
app.use(express.urlencoded({extended:false}));
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
  res.sendFile('contact.txt',{root:'./'});
});

app.get("/", (req, res) => {
  res.render("index");
});


app.post("/postdata",(req,res)=>{
  let name= req.body.name;
  let email = req.body.email;
  let subject= req.body.subject;
  let comments= req.body.comments
  const data = {name:req.body.name,email:req.body.email}
  fs.appendFile('contact.txt', `${JSON.stringify(data)}\n` , function (err) {
    if (err) throw err;
    console.log('Saved!');
    res.sendFile('contact.txt',{root:'./'});

  });
})
app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`server in running on port ${port}`);
  }
});
