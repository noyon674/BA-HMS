const { homeController } = require("../controllers/app.controller");

const appRouter = require("express").Router();

//home route
appRouter.get("/", homeController);

module.exports = appRouter;
