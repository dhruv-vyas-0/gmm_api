const express = require("express");
require("dotenv").config();

const app = express();
app.use(express.json());

const usersRouter = require('./routers/users.router');
const salaryStatusRouter = require('./routers/salary_status.router');
const weeklyPaymnetRouter = require('./routers/weekly_payments.router');
const workEntryRouter = require('./routers/work_entry.router');
const cuttingRecordsRouter = require('./routers/cutting_records.router');
const registerRouter = require('./routers/register.router');

app.use('/api/v1/users', usersRouter);
app.use('/api/v1/salary_status', salaryStatusRouter);
app.use('/api/v1/weekly_payments', weeklyPaymnetRouter);
app.use('/api/v1/work_entry', workEntryRouter);
app.use('/api/v1/cutting_records', cuttingRecordsRouter);
app.use('/api/v1/register', registerRouter);

const PORT = process.env.SERVER_PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});