require("dotenv").config();

const config = {
  app: {
    app_port: process.env.PORT,
  },
};

module.exports = config;
