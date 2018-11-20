const Cart = require('../models/carts');

exports.index =  (request, response, next) => {
    response.render('carts/index');
}