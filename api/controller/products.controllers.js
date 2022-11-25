const Products = require('../modelos/products.models');

const getAllProducts = async (req,res) => {
    try {
        const allProducts = await Products.find();
        return res.status(200).json(allProducts);
    } catch (error) {
        return res.status(500).json(error)
    }
};

const getProductById = async (req,res) => {
    try {
        const {id} = req.params;
        const getProductsById = await Products.findById(id);
        return res.status(200).json(getProductsById);
    } catch (error) {
        return res.status(500).json(error)
    }
};
const postNewProducts = async (req, res, next) => {
    try {
        console.log(req.body)
        const newProduct = new Products (req.body);
        if(req.file){
            newProduct.productImage = req.file.path
        }
        const createdProduct = await newProduct.save();

        res.status(201).json(createdProduct);
        return next();
    } catch (error) {
        res.status(500).json(error)
        return next();
    }
    
};

const putProducts = async (req,res, next) => {
    try {                                                 
        const {id} = req.params;
        const putProducts = new Products(req.body);
        putProducts._id = id;

        const ProductsDb = await Products.findByIdAndUpdate(id, putProducts, {new: true});
        if(!ProductsDb){
            return res.status(404).json({"message": "Products not found"});
        }
        if(req.file){
            putProducts.productImage = req.file.path
        }
        res.status(200).json(ProductsDb);
        return next();

    } catch (error) {
        res.status(500).json(error);
        return next();
    }
}; 

const deleteProducts = async (req,res) => {
    try {
        const {id} = req.params;
        const ProductsDb = await Products.findByIdAndDelete(id);
        if(!ProductsDb){
            return res.status(404).json({"message": "Products not found"});
        }
        return res.status(200).json(ProductsDb);
    } catch (error) {
        return res.status(500).json(error);   
};
}; 
module.exports = {getAllProducts, getProductById, postNewProducts, putProducts, deleteProducts};  