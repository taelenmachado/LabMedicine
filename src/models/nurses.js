const { Sequelize } = require("sequelize");
const connection = require("../database");

const Nurses = connection.define("nurses", {
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
    registration_cofen_uf: {
        type: Sequelize.STRING,
        allowNull: false
    },
    
});

module.exports = Nurses;