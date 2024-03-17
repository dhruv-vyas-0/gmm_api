const Router = require('express').Router;
const sellingRecordController = require('../controllers/selling_records.controller');

const sellingRecordsRouter = Router();

// GET : get all the selling records
sellingRecordsRouter.get('/', sellingRecordController.getAll);

// POST : /particular : Get selling records of a particular product
sellingRecordsRouter.post('/particular', sellingRecordController.getParticular);

// POST : create a new record
sellingRecordsRouter.post('/', sellingRecordController.createRecord);

module.exports = sellingRecordsRouter;