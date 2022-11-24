const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const usersSchema = new Schema (
    {
        userName: {type: String, required: true},
        userMail: {type: String, required: true},
        userImage: {type: String, require: true},
        userPhone: {type: Number, required: true},
        password: {type: String, required: true},
        allergens: [{type: Schema.Types.ObjectId, ref: "allergens"}],
        diary: {type: Schema.Types.ObjectId, ref: "diary"},
        idSos: {type: Schema.Types.ObjectId, ref: "sos"}
    }, {timestamps: true}
);

const Users = mongoose.model('users', usersSchema);

module.exports = Users;
