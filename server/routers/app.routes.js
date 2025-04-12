const express = require("express");
const {
  homeController,
  getAppointments,
  createAppointment,
} = require("../controllers/app.controller");

const appRouter = express.Router();

// Routes
appRouter.get("/", homeController);
appRouter.get("/appointments", getAppointments);
appRouter.post("/appointments", createAppointment);

module.exports = appRouter;
