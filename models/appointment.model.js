'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Appointment extends Model {
    static associate(models) {
      // define association here if needed
    }
  }

  Appointment.init({
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
    sequelize,
    modelName: 'Appointment',
    timestamps: false,
  });

  return Appointment;
};
