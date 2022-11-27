const express = require('express');
const router = express.Router();
const {isAuth} = require('../../middlewares/auth');

const {getAllAllergens, getAllergensById, postNewAllergens, putAllergens, deleteAllergens} = require('../controller/allergens.controllers')

router.get('/',getAllAllergens);
router.get('/:id', getAllergensById )
router.post('/', postNewAllergens);
router.put('/:id', putAllergens );
router.delete('/:id',[isAuth], deleteAllergens );



module.exports = router;