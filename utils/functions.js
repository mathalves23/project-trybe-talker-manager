const fs = require('fs');

const readTalker = (file) => JSON.parse(fs.readFileSync(file, 'utf8')); // Função que lê o arquivo talker.js

const sendMessage = (message) => ({ message }); // Função que envia uma mensagem de status

const emailValidation = (enteredEmail) => { // Função que faz a validação do e-mail
  if (!enteredEmail.includes('@') || !enteredEmail.includes('.com')) {
    return false;
  }
  return true;
};

module.exports = {
  readTalker,
  sendMessage,
  emailValidation,
};
