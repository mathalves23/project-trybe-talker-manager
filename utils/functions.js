const fs = require('fs');

const readTalker = (file) => JSON.parse(fs.readFileSync(file, 'utf8')); // Função que lê o arquivo talker.js

module.exports = readTalker;