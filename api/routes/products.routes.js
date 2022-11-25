const express = require('express');
const router = express.Router();
const {isAuth} = require('../../middlewares/auth');

const {getAllProducts, getProductById, postNewProducts, putProducts, deleteProducts } = require('../controller/products.controllers');



router.get('/',getAllProducts);
router.get('/:id', [isAuth], getProductById)
router.post('/', postNewProducts);
router.put('/:id', [isAuth], putProducts );
router.delete('/:id', deleteProducts );




module.exports = router;