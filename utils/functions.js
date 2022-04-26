const fs = require('fs');

const readTalker = (file) => JSON.parse(fs.readFileSync(file, 'utf8')); // Função que lê o arquivo talker.js

const sendMessage = (message) => ({ message }); // Função que envia uma mensagem de status

const generateToken = () => (
  Math.random().toString(16).substr(2) + Math.random().toString(16).substr(2)
);

module.exports = {
  readTalker,
  sendMessage,
  generateToken,
};
