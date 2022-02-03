const express = require("express");
const productsRoutes = require("./products.routes");
const categoriesRoutes = require("./categories.routes");
const adminsRoutes = require("./admins.routes");

const apiRouter = (app) => {
  const principalRouter = express.Router();

  principalRouter.use("/products", productsRoutes);
  principalRouter.use("/categories", categoriesRoutes);
  principalRouter.use("/admins", adminsRoutes);

  app.use("/api/v1", principalRouter);
};

module.exports = apiRouter;
