const apiRouter = require('express').Router();
const usersRouter = require('./userRouter');
apiRouter.get('/', (req, res) => {
	res.status(200).send('Welcome to the API');
});

apiRouter.use('/users', usersRouter);

module.exports = apiRouter;
