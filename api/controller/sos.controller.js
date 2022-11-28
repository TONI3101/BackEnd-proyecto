const Sos = require('../modelos/sos.models');

const getAllSos = async (req,res) => {
    try {
        const allSos = await Sos.find();
        return res.status(200).json(allSos);
    } catch (error) {
        return res.status(500).json(error)
    }
};

const getSostById = async (req,res) => {
    try {
        const {id} = req.params;
        const getSosById = await Sos.findById(id);
        return res.status(200).json(getSosById);
    } catch (error) {
        return res.status(500).json(error)
    }
};
const postNewSos = async (req, res) => {
    try {
        
        const newSos = new Sos (req.body);
        const createdSos = await newSos.save();
        console.log(createdSos);
        return res.status(201).json(createdSos);
    } catch (error) {
        return res.status(500).json(error)
    }
};

const putSos = async (req,res) => {
    try {                                                 
        const {id} = req.params;
        const putSos = new Sos(req.body);
        putSos._id = id;

        const SosDb = await Sos.findByIdAndUpdate(id, putSos, {new: true});
        if(!SosDb){
            return res.status(404).json({"message": "Sos not found"});
        }
        return res.status(200).json(SosDb);

    } catch (error) {
        return res.status(500).json(error)
    }
}; 

const deleteSos = async (req,res) => {
    try {
        const {id} = req.params;
        const SosDb = await Sos.findByIdAndDelete(id);
        if(!SosDb){
            return res.status(404).json({"message": "Sos not found"});
        }
        return res.status(200).json(SosDb);
    } catch (error) {
        return res.status(500).json(error);   
};
}; 
module.exports = {getAllSos, getSostById, postNewSos, putSos, deleteSos};