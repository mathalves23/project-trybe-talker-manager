const express = require('express');
const { getTalker, getTalkerById } = require('./middlewares/talkerMiddleware');

const router = express.Router();

router.get('/talker', getTalker); // Requisito 1

router.get('/talker/:id', getTalkerById); // Requisito 2

module.exports = router;
