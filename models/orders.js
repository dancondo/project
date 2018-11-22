const Sequelize = require('sequelize');
const sequelize = require('../database/index');
const User = require('./users');

const Order = sequelize.define('order', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    totalPrice: {
        type: Sequelize.INTEGER
    },
    status: {
        type: Sequelize.STRING,
        defaultValue: 'pending'
    }
});

Order.belongsTo(User);
User.hasMany(Order);
module.exports = Order;