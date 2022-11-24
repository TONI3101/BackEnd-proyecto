const Diary = require('../modelos/diary.models');

const getAllDiary = async (req,res) => {
    try {
        const allDiary = await Diary.find();
        return res.status(200).json(allDiary);
    } catch (error) {
        return res.status(500).json(error)
    }
};

const getDiaryById = async (req,res) => {
    try {
        const {id} = req.params;
        const getDiaryById = await Diary.findById(id);
        return res.status(200).json(getDiaryById);
    } catch (error) {
        return res.status(500).json(error)
    }
};
const postNewDiary = async (req, res) => {
    try {
        console.log(req.body)
        
        const newDiary = new Diary (req.body);
        const createdDiary = await newDiary.save();
        return res.status(201).json(createdDiary);
    } catch (error) {
        return res.status(500).json(error)
    }
};

const putDiary = async (req,res) => {
    try {                                                 
        const {id} = req.params;
        const putDiary = new Diary(req.body);
        putDiary._id = id;

        const DiaryDb = await Diary.findByIdAndUpdate(id, putDiary, {new: true});
        if(!DiaryDb){
            return res.status(404).json({"message": "Diary not found"});
        }
        return res.status(200).json(DiaryDb);

    } catch (error) {
        return res.status(500).json(error)
    }
}; 

const deleteDiary = async (req,res) => {
    try {
        const {id} = req.params;
        const DiaryDb = await Diary.findByIdAndDelete(id);
        if(!DiaryDb){
            return res.status(404).json({"message": "Diary not found"});
        }
        return res.status(200).json(DiaryDb);
    } catch (error) {
        return res.status(500).json(error);   
};
}; 
module.exports = {getAllDiary, getDiaryById, postNewDiary, putDiary, deleteDiary};  