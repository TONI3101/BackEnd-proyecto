const express = require('express');
const upload = require('../../middlewares/upload.files');
const router = express.Router();
const {isAuth} = require('../../middlewares/auth');

const {getAllProducts, postNewProducts, putProducts, deleteProducts, getProductById } = require('../controller/products.controllers');



router.get('/',getAllProducts);
router.get('/:id', getProductById)
router.post('/', upload.single('productImage'),[isAuth], postNewProducts);
router.put('/:id',upload.single('productImage'),[isAuth], putProducts );
router.delete('/:id',[isAuth], deleteProducts );




module.exports = router;