const { HTTP_OK_STATUS, NOT_FOUND } = require('../utils/statusCode'); // Importa o código 200 e 404.

const { readTalker, sendMessage, generateToken } = require('../utils/functions'); // Importa as funções do arquivo functions.js

const getTalker = (_req, res) => {
  const talkers = readTalker('./talker.json');
  return res.status(HTTP_OK_STATUS).json(talkers);
};

const getTalkerById = (req, res) => {
  const { id } = req.params;
  const talkers = readTalker('./talker.json');
  const talker = talkers.find((tal) => Number(tal.id) === Number(id));

  if (!talker) {
    return res.status(NOT_FOUND).json(sendMessage('Pessoa palestrante não encontrada'));
  }
  return res.status(HTTP_OK_STATUS).json(talker);
};

const login = (_req, res) => {
  const tokenMessage = {
    token: generateToken().slice(0, 16),
  };
  res.status(HTTP_OK_STATUS).send(tokenMessage);
};

module.exports = {
  getTalker,
  getTalkerById,
  login,
};