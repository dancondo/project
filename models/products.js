const products = [{ name: 'foo' }, { name: 'bar' }];
module.exports = class Product {
    constructor(attributes = {}) {
        this.title = attributes.title
    };
    static all(callback) {
        callback(products);
    };
    static where(argName, arg) {
        console.log(argName, arg);
    };
    static find(id, callback) {
        callback({ id: id, name: `Prod${id}`})
    };
    save() {
        products.push(this);
    };
    update() {

    };
    destroy() {

    };
}