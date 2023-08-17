const fs = require('fs');
const path = require('path');
const rootdir = require('../util/path.js');

const pro = path.join(rootdir, 'data', 'products.json');

const getFile = cb => {
    fs.readFile(pro, (err, data) => {
        if (err) {
            cb([]);
        } else {
            cb(JSON.parse(data));
        }
    })
}
module.exports = class ProductData {
    constructor(t) {
        this.title = t;
    }
    save() {
        getFile(products => {
            products.push(this)
            fs.writeFile(pro, JSON.stringify(products), (err) => {
                console.log(err);
            })
        })
    }
    static fetchAll(cb) {
        getFile(cb);
    }

}