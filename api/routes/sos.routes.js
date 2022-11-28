const express = require('express');

const router = express.Router();
const {isAuth} = require('../../middlewares/auth');

const {getAllSos, getSostById, postNewSos, putSos, deleteSos} = require('../controller/sos.controller');



router.get('/',getAllSos);
router.get('/:id', getSostById)
router.post('/', postNewSos);
router.put('/:id', [isAuth], putSos );
router.delete('/:id', deleteSos );




module.exports = router;