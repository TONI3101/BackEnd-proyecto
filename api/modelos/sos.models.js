const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const sosSchema = new Schema (
    {
        insuranceNumber: {type: Number, required: false},
        secureName: {type: String, required: false},
        contactName: {type: String, required: true},
        contactMail: {type: String, required: true},
        contacPhone: {type: Number, require: true},
    }, {timestamps: true}
);

const Sos = mongoose.model('sos', sosSchema );

module.exports = Sos;