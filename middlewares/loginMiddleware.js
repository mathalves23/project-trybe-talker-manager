const crypto = require('crypto'); // Importa Node.js Crypto Module
const { HTTP_OK_STATUS, ERROR_STATUS } = require('../utils/statusCode'); // Importa o código 200 e 404
const { sendMessage, emailValidation } = require('../utils/functions'); // Importa as funções do arquivo functions.js
const {
  NO_EMAIL,
  NO_PASSWORD,
  PASSWORD_ERROR,
  EMAIL_ERROR,
} = require('../utils/messages'); // Importa as mensagens de erro

const login = (req, res, next) => {
  const { email, password } = req.body;
  const token = crypto.randomBytes(8).toString('hex'); // Documentação crypto.randomBytes: https://www.w3schools.com/nodejs/ref_crypto.asp
  if (!email) {
    return res.status(ERROR_STATUS).json(sendMessage(NO_EMAIL)); // Verifica se o campo e-mail está preenchido
  } if (!password) {
    return res.status(ERROR_STATUS).json(sendMessage(NO_PASSWORD)); // Verifica se o campo password está preenchido
  } if (password.length < 6) {
    return res.status(ERROR_STATUS).json(sendMessage(PASSWORD_ERROR)); // Verifica se o password possui pelo menos 6 caracteres
  }
  const emailValidated = emailValidation(email);
     if (!emailValidated) {
     return res.status(ERROR_STATUS).json(sendMessage(EMAIL_ERROR)); // Verifica se o e-mail possui o formato correto
   }
  next(); return res.status(HTTP_OK_STATUS).json({ token }); // Caso esteja tudo correto, o endpoint retornaum código de status 200 com o token gerado
};

module.exports = login;