const Router = require('express').Router;
const registerController = require('../controllers/register.controller');

const registerRouter = Router();

// POST : Generate Password
registerRouter.post('/', registerController.register);

// PUT : Update password or role
registerRouter.put('/', registerController.update);

module.exports = registerRouter;