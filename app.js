const express = require("express");
const app = express();
const port = 3500;

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", { pagename: "home" });
});

app.get("/about-us", (req, res) => {
  res.render("about", {pagename: "about"});
});

app.get("/contact-us", (req, res) => {
  res.render("contact", {pagename: "contact"});
});

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
