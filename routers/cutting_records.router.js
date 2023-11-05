const Router = require('express').Router;
const cuttingRecordsController = require('../controllers/cutting_records.controller');

const cuttingRecordsRouter = Router();

// GET : get all records
cuttingRecordsRouter.get('/', cuttingRecordsController.getAll);

// GET : get all cutting records of a perticular person
cuttingRecordsRouter.get('/:id', cuttingRecordsController.getById);

// POST ; create a new cutting record
cuttingRecordsRouter.post('/', cuttingRecordsController.createCuttingRecord);

// DELETE : Delete a record using lot no
cuttingRecordsRouter.delete('/:lot_no', cuttingRecordsController.deleteRecord);

module.exports = cuttingRecordsRouter;