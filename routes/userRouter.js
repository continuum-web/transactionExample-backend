const usersRouter = require('express').Router();
const {
	getUsers,
	getSingleUser,
	alterPlayerCredit,
} = require('../controllers/userController');

// This route is for all GET requests for ip:port/api/users/ and will return all users
usersRouter.get('/', getUsers);
//this route get a single user using the parametric endpoint :userId
usersRouter.get('/:userId', getSingleUser);
//This Post request allows you to chance a user's account to either credit or debit an account
usersRouter.post('/:userId', alterPlayerCredit);


module.exports = usersRouter;
