const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const sosSchema = new Schema (
    {
        insuranceNumber: {type: Number, required: true},
        secureName: {type: String, required: true},
        contactName: {type: String, required: true},
        contactMail: {type: String, required: true},
        contacPhone: {type: Number, require: true},
    }, {timestamps: true}
);

const Sos = mongoose.model('sos', sosSchema );

module.exports = Sos;