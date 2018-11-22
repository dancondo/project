const Product = require('../models/products');

exports.index = (request, response, next) => {
    Product.find()
        .then(data => {
            response.render('products/index', { products: data });
        })
        .catch(error => {
            console.log(error);
        })
    ;
}
exports.show = (request, response, next) => {
    Product.findById(request.params.id)
        .then(data => {
            response.render('products/show', { product: data })
        })
        .catch(error => {
            console.log(error)
        })
    ;
}