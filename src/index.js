const verifyEnvironment = require("./lib/verifyEnvironment");

require("dotenv").config({
  path: verifyEnvironment(),
});

const express = require("express");
const morgan = require("morgan");
const pool = require("./services/index");
const apiRouter = require("./routes");

// initializations
const app = express();
apiRouter(app);

// middlewares // When send a petition to a server
app.use(morgan(process.env.ENVIRONMENT ? "dev" : "prod"));

// settings
app.set("port", process.env.PORT || 4000);

// global vars

// starting the server
app.listen(app.get("port"), () => {
  console.log("Listening on port", app.get("port"));
});

module.exports = {
  app,
  pool
};
