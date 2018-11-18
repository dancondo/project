const products = [{ name: 'foo' }, { name: 'bar' }];
module.exports = class Product {
    constructor(attributes = {}) {
        this.title = attributes.title
    }
    save() {
        products.push(this);
    }
    static all(callback) {
        callback(products);
    }
    static find(id, callback) {
        callback({ id: id, name: `Prod${id}`})
    }
}