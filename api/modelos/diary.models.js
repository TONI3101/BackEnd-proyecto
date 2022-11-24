const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const diarySchema = new Schema (
    {
        idDiary: {type: Number, required: true},
        date: {type: String, required: true},
        userId: {type: Number, required: true},
        note: {type: String, required: true},
        products: [{type: Schema.Types.ObjectId, ref: "products"}],
     }, {timestamps: true}
);

const Diary = mongoose.model('diary', diarySchema );

module.exports = Diary;