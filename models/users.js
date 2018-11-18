module.exports = class User {
    constructor(attributes = {}) {
        this.username = attributes.username
    }
    static all(callback) {
        callback(products);
    }
}