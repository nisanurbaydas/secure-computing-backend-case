const express = require('express');

const { index, create } = require('../controllers/Task');

const router = express.Router();

router.get('/', index);
router.post('/', create);

module.exports = router;
