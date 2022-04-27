const fs = require('fs');
const { readTalker, sendMessage, generateToken } = require('../utils/functions'); // Importa as funções do arquivo functions.js
const {
  ERROR_STATUS,
  UNAUTHORIZED,
  CREATED_STATUS,
  HTTP_OK_STATUS,
  NOT_FOUND,
} = require('../utils/statusCode'); // Importa os status
const {
  TOKEN_ERROR,
  NO_TOKEN,
  NO_NAME,
  NAME_ERROR,
  DATE_ERROR,
  NO_AGE,
  AGE_ERROR,
  EMPTY_ERROR,
  RATE_ERROR,
} = require('../utils/messages'); // Importa as mensagens de erro

const getTalker = (_req, res) => { // Pega o palestrante
  const talkers = readTalker('./talker.json');
  return res.status(HTTP_OK_STATUS).json(talkers);
};

const getTalkerById = (req, res) => { // Palestrante individualizado por ID
  const { id } = req.params;
  const talkers = readTalker('./talker.json');
  const talker = talkers.find((tal) => Number(tal.id) === Number(id));

  if (!talker) {
    return res.status(NOT_FOUND).json(sendMessage('Pessoa palestrante não encontrada'));
  }
  return res.status(HTTP_OK_STATUS).json(talker);
};

const login = (_req, res) => { // Validação de login
  const tokenMessage = {
    token: generateToken().slice(0, 16),
  };
  res.status(HTTP_OK_STATUS).send(tokenMessage);
};

const dateValidation = /^(0[1-9]|[1-2]\d|3[0-1])\/(0[1-9]|1[0-2])\/(19[8-9]\d|20[0-2]\d)$/;

const validateToken = (req, res, next) => { // Validação de Token
  const { authorization } = req.headers;
  if (!authorization) return res.status(UNAUTHORIZED).json(sendMessage(NO_TOKEN));
  if (authorization.length !== 16) {
    return res.status(UNAUTHORIZED).json(sendMessage(TOKEN_ERROR));
  }
  next();
};

const validateNameAge = (req, res, next) => { // Validação de Nome e Idade
  const { body } = req;
  if (!body.name) return res.status(ERROR_STATUS).json(sendMessage(NO_NAME));
  if (body.name.length < 3) return res.status(ERROR_STATUS).json(sendMessage(NAME_ERROR));
  if (!body.age) return res.status(ERROR_STATUS).json(sendMessage(NO_AGE));
  if (body.age < 18) return res.status(ERROR_STATUS).json(sendMessage(AGE_ERROR));
  next();
};

const validateTalk = (req, res, next) => { // Validação de Palestra
  const { body } = req;
  if (!body.talk) return res.status(ERROR_STATUS).json(sendMessage(EMPTY_ERROR));
  if (!body.talk.watchedAt) return res.status(ERROR_STATUS).json(sendMessage(EMPTY_ERROR));
  if (!body.talk.watchedAt.match(dateValidation)) {
    return res.status(ERROR_STATUS).json(sendMessage(DATE_ERROR));
  }
  next();
};

const validateRate = (req, res, next) => { // Validação de Avaliação
  const { body } = req;
  if (body.talk.rate === undefined || body.talk.rate === '') {
    return res.status(ERROR_STATUS).json(sendMessage(EMPTY_ERROR));
  }
  if (body.talk.rate < 1 || body.talk.rate > 5) {
    return res.status(ERROR_STATUS).json(sendMessage(RATE_ERROR));
  }
  next();
};

const validateTalker = (req, res) => { // Validação completa de palestrante
  const { body } = req;
  try {
    const talkers = JSON.parse(fs.readFileSync('./talker.json', 'utf8'));
    body.id = talkers.length + 1;
    fs.writeFileSync('./talker.json', JSON.stringify([...talkers, body]));
    return res.status(CREATED_STATUS).json(body);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  getTalker,
  getTalkerById,
  login,
  validateToken,
  validateNameAge,
  validateTalk,
  validateRate,
  validateTalker,
};  