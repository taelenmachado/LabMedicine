const { Sequelize } = require("sequelize");
const connection = require("../database");

const Patients = connection.define("patients", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
    },
    gender: {
        type: Sequelize.STRING,
    },
    date_of_birth: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    cpf: {
        type: Sequelize.STRING,
        unique: true
    },
    contact: {
        type: Sequelize.STRING
    },
    emergency_contact: {
        type: Sequelize.STRING,
        allowNull: false
    },
    allergy: {
        type: Sequelize.STRING
    },
    specific_cautions: {
        type: Sequelize.STRING
    },
    agreement: {
        type: Sequelize.STRING
    },
    status: {
        type: Sequelize.ENUM("AGUARDANDO_ATENDIMENTO", "EM_ATENDIMENTO", "ATENDIDO", "NÃO_ATENDIDO")
    },
    attendances: {
        type: Sequelize.INTEGER
    }
});

module.exports = Patients;