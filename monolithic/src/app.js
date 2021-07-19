const express = require("express");

const app = express();

const response = {
  data: [],
  services: "monolithic Service",
  architecture: "Monolithic",
};

app.use((req, res, next) => {
  response.data = [];
  next();
});

app.get("/api/v1/users", (req, res) => {
  response.data.push("Naren", "David", "Pepito");
  return res.send(response);
});

app.get("/api/v1/books", (req, res) => {
  response.data.push("Javascript", "POO", "CLEAN CODE");
  return res.send(response);
});

app.get("/api/v1/cars", (req, res) => {
  response.data.push("mazda", "suzuki", "bmw");
  return res.send(response);
});

module.exports = app;
