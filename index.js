require("dotenv").config();
const bodyParser = require("body-parser");
const express = require("express");
var mongoose = require("mongoose");

const routes = require("./routes.js");

const app = express();
const port = process.env.PORT || 80;

const mongoDB = process.env.MONGO_CONNECTION_STRING;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

//Get the default connection
const db = mongoose.connection;

//Bind connection to error event
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());
app.use("/api", routes);

app.listen(port, () => {
  console.log(`Show list API listening on port ${port}`);
});
