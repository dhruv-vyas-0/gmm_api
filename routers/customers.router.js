const Router = require('express').Router;
const customersController = require('../controllers/customers.controller');

const customersRouter = Router();

// GET : Get records of all customers
customersRouter.get('/', customersController.getAll);

// GET : Get a record of a particular customer
customersRouter.get('/:id', customersController.getById);

// POST : Create a new customer
customersRouter.post('/', customersController.createCustomer);

// PUT : Update a customer record
customersRouter.put('/:id', customersController.updateCustomer);

// DELETE : Delete a customer record
customersRouter.delete('/:id', customersController.deleteCustomer);

// PUT : /bill : Update the bill of a customer
customersRouter.put('/bill/:id', customersController.updateBill);

module.exports = customersRouter;