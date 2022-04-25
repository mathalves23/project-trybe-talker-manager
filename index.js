const express = require('express');
const router = require('./router');
const bodyParser = require('body-parser');
const { HTTP_OK_STATUS } = require('./utils/statusCode');

const app = express();
app.use(bodyParser.json());

const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
	response.status(HTTP_OK_STATUS).send();
});

app.use(router);

app.listen(PORT, () => {
	console.log('Online');
});
