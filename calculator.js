// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  var num1 = Number(req.body.firstnum);
  var num2 = Number(req.body.secondnum);
  res.send(
    "<h2 style='font-family:montserrat; font-weight:500;'>The result of the calculation is " +
      String(num1 + num2) +
      ".</h2>"
  );
});

app.get("/bmiCalculator", (req, res) => {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", (req, res) => {
  var height = parseFloat(req.body.height);
  var weight = parseFloat(req.body.weight);

  var result = weight / Math.pow(height, 2);
  res.send(
    "<h2 style='font-family:montserrat; font-weight:500;'>The BMI is " +
      String(result) +
      " kg/m2.</h2>"
  );
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
