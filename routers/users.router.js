const Router = require('express').Router;
const usersController = require('../controllers/users.controller');

const usersRouter = Router();

// GET : get all users
usersRouter.get('/', usersController.getAll);

// GET : get user by id
usersRouter.get('/:id', usersController.getById);

// POST : create a new user
usersRouter.post('/', usersController.createUser);

// PUT : update user information
usersRouter.put('/:id', usersController.updateUser);

// DELETE : delete a user
usersRouter.delete('/:id', usersController.deleteUser);

module.exports = usersRouter;