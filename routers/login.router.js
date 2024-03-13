const Router = require('express').Router;
const loginController = require('../controllers/login.controller');

const loginRouter = Router();

// POST : Attempt login
loginRouter.post('/', loginController.login);

module.exports = loginRouter;