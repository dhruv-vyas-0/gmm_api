const Router = require('express').Router;
const salaryPaymentsController = require('../controllers/salary_payments.controller');

const salaryPaymnetsRouter = Router();

// GET ; get all payments till now
salaryPaymnetsRouter.get('/', salaryPaymentsController.getAll);

// GET : get payments done to a particular user
salaryPaymnetsRouter.get('/:id', salaryPaymentsController.getById);

// POST : make a new payment
salaryPaymnetsRouter.post('/', salaryPaymentsController.createPayment);

module.exports = salaryPaymnetsRouter;