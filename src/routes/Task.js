const express = require('express');

const { index, create, fetchTask, deleteTask } = require('../controllers/Task');
const idChecker = require('../middlewares/idChecker');

const router = express.Router();

router.get('/', index);
router.post('/', create);
router.route('/:id').get(idChecker(), fetchTask);
router.route('/:id').delete(idChecker(), deleteTask);

module.exports = router;
