const Router = require('express').Router;
const workEntryController = require('../controllers/work_entry.controller');

const workEntryRouter = Router();

// GET : get all work entries
workEntryRouter.get('/', workEntryController.getAll);

// GET : get all work done by a particular person
workEntryRouter.get('/:id', workEntryController.getById);

// POST : create a new work entry
workEntryRouter.post('/', workEntryController.createWorkEntry);

module.exports = workEntryRouter;