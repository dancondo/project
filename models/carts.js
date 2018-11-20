const Sequelize = require('sequelize');
const sequelize = require('../database/index');
const Product = require('./products');
const User = require('./users');

const Cart = sequelize.define('cart', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    amount: {
        type: Sequelize.INTEGER
    }
});
Product.belongsToMany(User, {through: Cart });
User.belongsToMany(Product, {through: Cart });
module.exports = Cart;