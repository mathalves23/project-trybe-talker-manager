const crypto = require('crypto'); // Importa Node.js Crypt Module
const { HTTP_OK_STATUS, ERROR_STATUS } = require('../utils/statusCode'); // Importa o código 200 e 404
const { sendMessage, emailValidation } = require('../utils/functions'); // Importa as funções do arquivo functions.js

const login = (req, res, next) => {
  const { email, password } = req.body;
  const token = crypto.randomBytes(8).toString('hex'); // Documentação crypto.randomBytes: https://www.w3schools.com/nodejs/ref_crypto.asp
  if (!email) {
    return res.status(ERROR_STATUS).json(sendMessage('O campo "email" é obrigatório')); // Verifica se o campo e-mail está preenchido
  } if (!password) {
    return res.status(ERROR_STATUS).json(sendMessage('O campo "password" é obrigatório')); // Verifica se o campo password está preenchido
  } if (password.length < 6) {
    return res.status(ERROR_STATUS).json(sendMessage(
      'O "password" deve ter pelo menos 6 caracteres',
)); // Verifica se o password possui pelo menos 6 caracteres
  }
  const emailValidated = emailValidation(email);
     if (!emailValidated) {
     return res.status(ERROR_STATUS).json(sendMessage(
       'O "email" deve ter o formato "email@email.com"',
)); // Verifica se o e-mail possui o formato correto
   }
  next(); return res.status(HTTP_OK_STATUS).json({ token }); // Caso esteja tudo correto, o endpoint retornaum código de status 200 com o token gerado
};

module.exports = login;