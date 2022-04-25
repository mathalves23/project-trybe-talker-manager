
const { HTTP_OK_STATUS } = require('../utils/statusCode'); // Importa o código 200

const readTalker  = require('../utils/functions'); // Importa a função que lê o arquivo talkers.js

const getTalker = (_req, res) => {
	const talkers = readTalker('./talker.json');
	return res.status(HTTP_OK_STATUS).json(talkers);
};

module.exports = getTalker; 

