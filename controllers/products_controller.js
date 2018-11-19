const Product = require('../models/products');

exports.index = (request, response, next) => {
    Product.findAll()
        .then(data => {
            response.render('products/index', { products: data })
        })
        .catch(error => {
            response.render('pages/404')
        })
    ;
}
exports.show = (request, response, next) => {
    Product.findByPk(request.params.id)
        .then(data => {
            response.render('products/show', { product: data });
        })
        .catch(error => {
            console.log(error)
        })
}