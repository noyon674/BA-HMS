'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Patient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Patient.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    date_of_birth: DataTypes.DATEONLY,
    gender: {
      type: Sequelize.ENUM('M', 'F'),
      allowNull: false,
    },
    
    contact_number: DataTypes.STRING,
    blood_group: DataTypes.STRING,
    address: DataTypes.TEXT,
    
  }, {
    sequelize,
    modelName: 'Patient',
  });
  return Patient;
};