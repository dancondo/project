const Product = require('../../models/products');

exports.new = (request, response, next) => {
    response.render('admin/products/new', { product: new Product });
}
exports.create = (request, response, next) => {
    const product = Product.build(productParams(request.body))    
        .save()
        .then(data => {
            response.redirect(`/products/${data.id}`)
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
    console.log('bar')
    setProduct(request, response)
        .then(product => {
            product.update(productParams(request.body))
            .then(data => {
                response.redirect(`/products/${data.id}`)
            })
            .catch(error => {
                console.log(error);
                response.render('pages/404');
            })
        })
    ;
}
exports.destroy = (request, response, next) => {

}
const setProduct = (request, response) => {
    return Product.findByPk(request.params.id)
        .then(data => {
            if(data) {
                return data
            }
            return response.render('pages/404');
        })
        .catch(error => {
            console.log(error)
            return response.render('pages/404');
        })
    ;
};
const productParams = (params) => {
    return {
        name: params.name,
        price: params.price,
        description: params.description,
        imageURL: params.imageURL
    }
}