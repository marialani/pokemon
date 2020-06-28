const path = require("path");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");
require("dotenv");

const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");

const express = require("express");
const app = express();

// let sendPokemon = require("./models/dbInit/sendPokemon");

mongoose.Promise = global.Promise;

// Connect to db before running tests
// before((done) => {
// Connect to mongodb
mongoose.connect(
  `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@pokemon-haicl.mongodb.net/pokemon?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);
//connection string w password etc)
mongoose.connection
  .once("open", () => {
    console.log("connected to db");
    // done();
  })
  .on("error", () => {
    console.log("Connection error: ", error);
  });
// });

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

// sendPokemon();

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
