
const { HTTP_OK_STATUS, NOT_FOUND } = require('../utils/statusCode'); // Importa o código 200

const { readTalker, sendMessage }  = require('../utils/functions'); // Importa as funçõees do arquivo functions.js

const getTalker = (_req, res) => {
	const talkers = readTalker('./talker.json');
	return res.status(HTTP_OK_STATUS).json(talkers);
};

const getTalkerById = (req, res) => {
	const { id } = req.params;
	const talkers = readTalker('./talker.json');
	const talker = talkers.find((talker) => Number(talker.id) === Number(id));

	if (!talker) {
		return res.status(NOT_FOUND).json(sendMessage('Pessoa palestrante não encontrada'));
	}
	return res.status(HTTP_OK_STATUS).json(talker);
};

module.exports = {
	getTalker,
	getTalkerById
};