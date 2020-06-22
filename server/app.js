const path = require("path");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const express = require("express");
const app = express();

app.use(bodyParser.json());

// Log requests to make error identification easier
app.use(morgan("dev"));

// CORS Headers => Required for cross-origin/ cross-server communication
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "..", "client", "build")));

// Backend routes
app.use("/api", require("./routes/routes"));

module.exports = app;
