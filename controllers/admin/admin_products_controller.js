const Product = require('../../models/products');

exports.new = (request, response, next) => {
    response.render('admin/products/new');
}
exports.create = (request, response, next) => {
    console.log(request.body);
    response.redirect('/admin');
}
exports.edit = (request, response, next) => {
    Product.find(request.params.id, product => {
        response.render('admin/products/edit', {
            product
        });
    })
}