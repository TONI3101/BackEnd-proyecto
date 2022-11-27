const express = require('express');

const router = express.Router();
const {isAuth} = require('../../middlewares/auth');

const {getAllDiary, getDiaryById, postNewDiary, putDiary, deleteDiary } = require('../controller/diary.controller');



router.get('/',getAllDiary);
router.get('/:id', getDiaryById)
router.post('/', postNewDiary);
router.put('/:id', putDiary );
router.delete('/:id', deleteDiary );




module.exports = router;