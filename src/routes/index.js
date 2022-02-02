const express = require("express");
const productsRoutes = require("./products.routes");

const apiRouter = (app) => {
  const principalRouter = express.Router();

  principalRouter.use("/products", productsRoutes);
  app.use("/api/v1", principalRouter);
};

module.exports = apiRouter;
