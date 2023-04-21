const { Sequelize } = require("sequelize");
const connection = require("../database");
const Medicals = require("./medicals");
const Patients = require("./patients");

const Attendances = connection.define("attendances", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    description: {
      type: Sequelize.STRING
    },
    patient_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    medical_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    }
  });

  Attendances.belongsTo(Medicals)
  Attendances.belongsTo(Patients)

module.exports = Attendances;
