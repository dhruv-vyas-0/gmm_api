const Router = require('express').Router;
const weeklyPaymnetsController = require('../controllers/weekly_payments.controller');

const weeklyPaymnetRouter = Router();

// GET ; get all payments till now
weeklyPaymnetRouter.get('/', weeklyPaymnetsController.getAll);

// GET : get payments done to a particular user
weeklyPaymnetRouter.get('/:id', weeklyPaymnetsController.getById);

// POST : make a new payment
weeklyPaymnetRouter.post('/', weeklyPaymnetsController.createPayment);

module.exports = weeklyPaymnetRouter;