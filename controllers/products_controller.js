const Product = require('../models/products');

exports.index = (request, response, next) => {
    Product.all(products => {
        response.render('products/index', {
            products,
            headTitle: 'Products'
        })
    })
}

exports.show = (request, response, next) => {
    Product.find(request.params.id, product => {
        response.render('products/show', {
            product
        })
    })
}