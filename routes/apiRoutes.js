const apiRouter = require('express').Router();

apiRouter.get('/', (req, res) => {
	res.status(200).send('Welcome to the API');
});

module.exports = apiRouter