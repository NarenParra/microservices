const express = require("express");

const app = express();

const response = {
  data: [],
  services: "Book Service",
  architecture: "Microservices",
};

const logger = (message) => console.log("Book-service" + message);

app.use((req, res, next) => {
  response.data = [];
  next();
});

app.get("/api/v2/books", (req, res) => {
  response.data.push("Javascript", "POO", "Clean Code");
  logger("Get Books data");
  return res.send(response);
});

module.exports = app;
