const { DataTypes } = require("sequelize");
const sequelize = require("../db");

// Define Appointment Model
const Appointment = sequelize.define("Appointment", {
  full_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  doctor_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  select_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  phone_number: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: false, // No createdAt/updatedAt fields
});

module.exports = Appointment;
