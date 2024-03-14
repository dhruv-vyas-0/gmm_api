const Router = require('express').Router;
const dashboardSalesController = require('../controllers/dashboard_sales.controller');

const dashboardSalesRouter = Router();

// GET : get by id
dashboardSalesRouter.get('/:id', dashboardSalesController.getById);

module.exports = dashboardSalesRouter;