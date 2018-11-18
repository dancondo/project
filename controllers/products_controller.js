const Product = require('../models/products');
const db = require('../database');

exports.index = (request, response, next) => {
    Product.all(products => {
        response.render('products/index', {
            products,
            headTitle: 'Products'
        }),
        db.query('SELECT * FROM users WHERE id = $1', [1], (err, res) => {
            if (err) {
              return next(err)
            }
            res.send(res.rows[0])
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