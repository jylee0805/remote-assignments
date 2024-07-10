const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
const port = 3000;
const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:3000",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.urlencoded());
app.use(cookieParser());
app.use(express.static("public"));

app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/getData", (req, res) => {
  const number = req.query.number;
  let result = 0;

  if (!number || number == "") {
    result = "Lack of Parameter";
  } else if (!isNaN(number)) {
    for (let i = 1; i <= number; i++) {
      result += i;
    }
  } else {
    result = "Wrong Parameter";
  }
  res.send(`${result}`);
  //res.render("getData", { result });
});

app.get("/myName", (req, res) => {
  let name;

  if (req.cookies.username) {
    name = req.cookies.username;
    res.render("myName", { name });
  } else {
    res.render("myName");
  }
});
app.get("/trackName", (req, res) => {
  let name;

  if (req.query.name) {
    name = req.query.name;
    res.cookie("username", name);
    res.render("myName", { name });
  }
});
app.get("/clear", (req, res) => {
  res.clearCookie("username");
  res.redirect("/myName");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
