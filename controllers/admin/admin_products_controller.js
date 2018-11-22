const Product = require('../../models/products');

exports.new = (request, response, next) => {
    response.render('admin/products/new', { product: {} });
}
exports.create = (request, response, next) => {
    const product = new Product(productParams(request.body));
    product.save()
        .then(() => {
            response.redirect(`/products/${product.id}`);
        })
        .catch(error => {
            console.log(error)
            response.render('admin/products/new');
        })
    ;
}
exports.edit = (request, response, next) => {
    setProduct(request, response)
        .then(product => {
            response.render('admin/products/edit', { product })
        })
    ;
}
exports.update = (request, response, next) => {
    setProduct(request, response)
        .then(product => {
            product.update(productParams(request.body))
                .then(() => {
                    response.redirect(`/products/${product.id}`)
                })
            ;
        })
        .catch(error => {
            console.log(error);
            response.render('pages/404');
        })
    ;
}
exports.destroy = (request, response, next) => {
    Product.findByIdAndRemove(request.params.id)
        .then(data => {
            response.redirect('/products')
        })
        .catch(error => {
            console.log(error);
            response.render('pages/404');
        })
    ;
}

const setProduct = (request, response) => {
    return Product.findById(request.params.id)
        .then(data => {
            return data;
        })
        .catch(error => {
            response.render('pages/404');
        })
    ;
};
const productParams = (params) => {
    return {
        name: params.name,
        price: params.price,
        description: params.description,
        imageUrl: params.imageUrl
    }
}