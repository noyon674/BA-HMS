const { Sequelize } = require("sequelize");
const config = require("./config/configure");

// Initialize Sequelize
const sequelize = new Sequelize(config.db.name, config.db.user, config.db.password, {
  host: config.db.host,
  dialect: "mysql",
});

try {
  sequelize.authenticate();
  console.log("✅ MySQL connected with Sequelize");
} catch (err) {
  console.error("❌ Error connecting to the database:", err);
}

module.exports = sequelize;
