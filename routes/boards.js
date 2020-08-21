var express = require('express');
var router = express.Router();
const boardsCtrl = require('../controllers/boards');

/* GET boards listing. */
router.get('/', boardsCtrl.index);
router.get('/new', boardsCtrl.defineBoard);
router.get('/:boardId', boardsCtrl.show)

router.post('/', boardsCtrl.createBoard);


module.exports = router;