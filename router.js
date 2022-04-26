const express = require('express');
const { getTalker, getTalkerById } = require('./middlewares/talkerMiddleware');
const login = require('./middlewares/loginMiddleware');

const router = express.Router();

router.get('/talker', getTalker); // Requisito 1

router.get('/talker/:id', getTalkerById); // Requisito 2

router.post('/login', login); // Requisito 3 e 4

module.exports = router;
