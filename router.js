const express = require('express');
const getTalker = require('./middlewares/talkerMiddleware');

const router = express.Router();

router.get('/talker', getTalker);


module.exports = router;





