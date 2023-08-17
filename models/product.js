const products = [];

module.exports = class ProductData{
    constructor(t){
        this.title = t;
    }
    save(){
        products.push(this);
    }
    static fetchAll(){
        return products;
    }
}