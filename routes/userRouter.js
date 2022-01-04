const usersRouter = require('express').Router();
const {getUsers, getSingleUser, creditPlayer} = require('../controllers/userController');

usersRouter.get('/', getUsers);
usersRouter.get('/:userId', getSingleUser);
usersRouter.post('/:userId', creditPlayer);

module.exports = usersRouter;
