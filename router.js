const express = require('express');
const login = require('./middlewares/loginMiddleware');
const { getTalker,
  getTalkerById,
  validateToken,
  validateNameAge,
  validateTalk,
  validateRate,
  validateTalker,
  validateTalkerById,
  deleteTalker,
} = require('./middlewares/talkerMiddleware');

const router = express.Router();

router.get('/talker', getTalker); // Requisito 1

router.get('/talker/:id', getTalkerById); // Requisito 2

router.post('/login', login); // Requisito 3 e 4

router.post('/talker', // Requisito 5
   validateToken,
   validateNameAge,
   validateTalk,
   validateRate,
   validateTalker);

router.put('/talker/:id', // Requisito 6
  validateToken,
  validateNameAge,
  validateTalk,
  validateRate,
  validateTalkerById);

router.delete('/talker/:id', validateToken, deleteTalker); // Requisito 7

module.exports = router;
