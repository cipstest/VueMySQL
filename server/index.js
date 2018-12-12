const express = require("express");
const bparser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");

const { sequelize } = require("./models");

const config = require("./config/config");
// const mysql = require("mysql");

const app = express();
app.use(morgan("combined"));
app.use(bparser.json());
app.use(cors());

require("./routes")(app);

app.get("/status", (req, res) => {
  res.send({
    message: "Working!"
  });
});

sequelize.sync().then(() => {
  // Wait for sequelize to sync with the database then start the server
  app.listen(config.port, () => {
    console.log("Server started on port " + config.port);
  });
});
