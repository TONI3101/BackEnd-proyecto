const express = require('express');
const upload = require('../../middlewares/upload.files');
const router = express.Router();
const {isAuth} = require('../../middlewares/auth');

const {getAllProducts, getProductById, postNewProducts, putProducts, deleteProducts } = require('../controller/products.controllers');



router.get('/',getAllProducts);
router.get('/:id', [isAuth], getProductById)
router.post('/', upload.single('productImage'), postNewProducts);
router.put('/:id',upload.single('productImage'), [isAuth], putProducts );
router.delete('/:id', deleteProducts );




module.exports = router;