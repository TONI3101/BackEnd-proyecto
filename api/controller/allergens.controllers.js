const Allergens = require('../modelos/allergens.models');

const getAllAllergens = async (req,res) => {
    try {
        const allAllergens = await Allergens.find();
        return res.status(200).json(allAllergens);
    } catch (error) {
        return res.status(500).json(error)
    }
};

const getAllergensById = async (req,res) => {
    try {
        const {id} = req.params;
        const getAllergensById = await Allergens.findById(id);
        return res.status(200).json(getAllergensById);
    } catch (error) {
        return res.status(500).json(error)
    }
};
const postNewAllergens = async (req, res) => {
    try {
        console.log(req.body)
        
        const newAllergens = new Allergens (req.body);
        const createdAllergens = await newAllergens.save();
        return res.status(201).json(createdAllergens);
    } catch (error) {
        return res.status(500).json(error)
    }
};

const putAllergens = async (req,res) => {
    try {                                                 
        const {id} = req.params;
        const putAllergens = new Allergens(req.body);
        putAllergens._id = id;

        const AllergensDb = await Allergens.findByIdAndUpdate(id, putAllergens, {new: true});
        if(!AllergensDb){
            return res.status(404).json({"message": "Allergens not found"});
        }
        return res.status(200).json(AllergensDb);

    } catch (error) {
        return res.status(500).json(error)
    }
}; 

const deleteAllergens = async (req,res) => {
    try {
        const {id} = req.params;
        const AllergensDb = await Allergens.findByIdAndDelete(id);
        if(!AllergensDb){
            return res.status(404).json({"message": "Allergens not found"});
        }
        return res.status(200).json(AllergensDb);
    } catch (error) {
        return res.status(500).json(error);   
};
}; 
module.exports = {getAllAllergens, getAllergensById, postNewAllergens, putAllergens, deleteAllergens};