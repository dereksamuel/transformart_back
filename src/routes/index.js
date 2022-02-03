const express = require("express");
const productsRoutes = require("./products.routes");
const categoriesRoutes = require("./categories.routes");

const apiRouter = (app) => {
  const principalRouter = express.Router();

  principalRouter.use("/products", productsRoutes);
  principalRouter.use("/categories", categoriesRoutes);

  app.use("/api/v1", principalRouter);
};

module.exports = apiRouter;
