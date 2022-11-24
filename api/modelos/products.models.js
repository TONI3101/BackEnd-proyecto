const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productsSchema = new Schema (
    {
        productName: {type: String, required: true},
        productImage: {type: String, required: true},
        ingredients: {type: String, required: true},
        barCode: {type: Number, require: true}
    }, {timestamps: true}
);

const Products = mongoose.model('products', productsSchema );

module.exports = Products;