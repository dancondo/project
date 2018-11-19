const Sequelize = require('sequelize');
const sequelize = require('../database/index');

const Product = sequelize.define('product', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.DOUBLE
    },
    imageURL: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.TEXT
    }
});

module.exports = Product;