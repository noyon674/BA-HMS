'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Patient extends Model {
    static associate(models) {
      // define associations here if needed
    }
  }

  Patient.init({
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING,
    role: DataTypes.ENUM('admin', 'doctor', 'staff', 'patient')
  }, {
    sequelize,
    modelName: 'Patient',
    timestamps: false
  });

  return Patient;
};
