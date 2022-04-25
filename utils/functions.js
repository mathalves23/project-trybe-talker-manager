const fs = require('fs');

const readTalker = (file) => JSON.parse(fs.readFileSync(file, 'utf8')); // Função que lê o arquivo talker.js

const sendMessage = (message) => ({ message }); // Função que envia uma mensagem de status

module.exports = {
	readTalker,
	sendMessage
};
