const express = require("express");
const appRouter = require("./routers/app.routes");

//create express app
const app = express();

//routers
app.use(appRouter);

//client error handle
app.use((req, res, next) => {
  res.status(404).json({ error: "Resource not found" });
});

//server error handle
app.use((err, req, res, next) => {
  res.status(500).json({ error: "Internal Server Error" });
});

//export app
module.exports = app;
