const usersRouter = require('express').Router();
const {
	getUsers,
	getSingleUser,
	alterPlayerCredit,
} = require('../controllers/userController');

usersRouter.get('/', getUsers);
usersRouter.get('/:userId', getSingleUser);
usersRouter.post('/:userId', alterPlayerCredit);


module.exports = usersRouter;
