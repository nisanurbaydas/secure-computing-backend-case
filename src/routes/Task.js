const express = require('express');

const { index, create, fetchTask, deleteTask } = require('../controllers/Task');

const router = express.Router();

router.get('/', index);
router.post('/', create);
router.get('/:id', fetchTask);
router.delete('/:id', deleteTask);

module.exports = router;
