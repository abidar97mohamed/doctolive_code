const Sequelize = require('sequelize');
const connection = require('../config/database');

const adress = connection.define('adress', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    streetName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    buildingName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    sector: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    nameCompany: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    floor: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    housseNumber: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    codePostal: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    latitude: {
        type: Sequelize.FLOAT,
        allowNull: false,
        validate: { min: -90, max: 90 },
    },
    longitude: {
        type: Sequelize.FLOAT,
        allowNull: false,
        validate: { min: -180, max: 180 },
    },
    latitudeDelta: {
        type: Sequelize.FLOAT,
        allowNull: true,
    },
    longitudeDelta: {
        type: Sequelize.FLOAT,
        allowNull: true,
    },
    active: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue:false,
    },

});

module.exports = adress;