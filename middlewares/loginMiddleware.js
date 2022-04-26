const crypto = require('crypto'); // Documentação crypto.randomBytes: https://www.w3schools.com/nodejs/ref_crypto.asp
const { HTTP_OK_STATUS, NOT_FOUND } = require('../utils/statusCode'); // Importa o código 200 e 404
const { sendMessage } = require('../utils/functions'); // Importa as funções do arquivo functions.js

const login = (req, res, next) => {
  const { email, password } = req.body;
  const token = crypto.randomBytes(8).toString('hex'); 
  if (!email || !password) {
    return res.status(NOT_FOUND).json(sendMessage('Email and Password must be provided')); 
}
  next();

  return res.status(HTTP_OK_STATUS).json({ token });
};

module.exports = login;