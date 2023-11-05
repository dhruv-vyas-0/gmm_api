const Router = require('express').Router;
const salaryStatusController = require('../controllers/salary_status.controller')

const salaryStatusRouter = Router();

// GET : get salary status of all users
salaryStatusRouter.get('/', salaryStatusController.getAll);

// GET : get salary status by user_id
salaryStatusRouter.get('/:id', salaryStatusController.getById);

// PUT : update salary status
salaryStatusRouter.put('/:id', salaryStatusController.updateSalaryStatus);

module.exports = salaryStatusRouter;