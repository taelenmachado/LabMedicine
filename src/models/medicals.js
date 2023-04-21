const { Sequelize } = require("sequelize");
const connection = require("../database");

const Medicals = connection.define("medicals", {
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
    education_institution: {
        type: Sequelize.STRING,
        allowNull: false
    },
    registration_crm_uf: {
        type: Sequelize.STRING,
        allowNull: false
    },
    clinical_specialization: {
        type: Sequelize.STRING,
        allowNull: false
    },
    system_status: {
        type: Sequelize.ENUM("ATIVO", "INATIVO"),
        defaultValue: "ATIVO"
    },
    attendances: {
        type: Sequelize.INTEGER
    }
});

module.exports = Medicals;