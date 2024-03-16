const Router = require('express').Router;
const inventoryController = require('../controllers/inventory.controller');

const inventoryRouter = Router();

// GET : Get all the inventory records
inventoryRouter.get('/', inventoryController.getAll);

// GET : /particular : get a particular record
inventoryRouter.post('/particular', inventoryController.getParticular);

// PUT : /cost_margin : Update cost Margin of a record
inventoryRouter.put('/cost_margin', inventoryController.updateCostMargin);

// PUT : /stock : Update the stock of a record
inventoryRouter.put('/stock', inventoryController.updateStock);

module.exports = inventoryRouter;