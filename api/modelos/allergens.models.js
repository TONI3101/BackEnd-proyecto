const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const allergensSchema = new Schema(
    {
        allergensName: {type: String, require: true},
    },{timestamps: true}
);

const Allergens = mongoose.model('allergens', allergensSchema);

module.exports = Allergens;