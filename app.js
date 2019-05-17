const express = require("express");

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"))

app.get("/", (req, res) => {
  res.render("./index");
});
app.get("/address", (req, res) => {
  res.render("./address.ejs");
});
app.get("/bzproList", (req, res) => {
  res.render("./bzproList");
});
app.get("/cart", (req, res) => {
  res.render("./cart");
});
app.get("/decoration", (req, res) => {
  res.render("./decoration");
});
app.get("/flowerDer", (req, res) => {
  res.render("./flowerDer");
});
app.get("/forget", (req, res) => {
  res.render("./forget");
});
app.get("/idea", (req, res) => {
  res.render("./idea");
});
app.get("/login", (req, res) => {
  res.render("./login.ejs");
});
app.get("/mygrxx", (req, res) => {
  res.render("./mygrxx");
});
app.get("/mygxin", (req, res) => {
  res.render("./mygxin");
});
app.get("/myorderq", (req, res) => {
  res.render("./myorderq");
});
app.get("/myprod", (req, res) => {
  res.render("./myprod");
});
app.get("/ok", (req, res) => {
  res.render("./ok");
});
app.get("/order", (req, res) => {
  res.render("./order");
});
app.get("/orderxq", (req, res) => {
  res.render("./orderxq");
});
app.get("/paint", (req, res) => {
  res.render("./paint");
});
app.get("/perfume", (req, res) => {
  res.render("./perfume");
});
app.get("/proDetail", (req, res) => {
  res.render("./proDetail");
});
app.get("/proList", (req, res) => {
  res.render("./proList");
});
app.get("/reg", (req, res) => {
  res.render("./reg");
});
app.get("/remima", (req, res) => {
  res.render("./remima");
});
app.get("/search", (req, res) => {
  res.render("./search");
});
app.get("/vase_proList", (req, res) => {
  res.render("./vase_proList");
});
app.get("/wuliu", (req, res) => {
  res.render("./wuliu");
});
app.get("/zbproList", (req, res) => {
  res.render("./zbproList");
});

app.listen(3080, () => console.log("http://localhost:3080"))