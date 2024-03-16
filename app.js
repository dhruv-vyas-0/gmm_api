const express = require("express");
const cors = require('cors');
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

const usersRouter = require('./routers/users.router');
const salaryStatusRouter = require('./routers/salary_status.router');
const salaryPaymnetsRouter = require('./routers/salary_payments.router');
const workEntryRouter = require('./routers/work_entry.router');
const cuttingRecordsRouter = require('./routers/cutting_records.router');
const registerRouter = require('./routers/register.router');
const loginRouter = require('./routers/login.router');
const garmentAttributesRouter = require('./routers/garment_attributes.router');
const dashboardSalesRouter = require('./routers/dashboard_sales.router');

app.use('/api/v1/users', usersRouter);
app.use('/api/v1/salary_status', salaryStatusRouter);
app.use('/api/v1/salary_payments', salaryPaymnetsRouter);
app.use('/api/v1/work_entry', workEntryRouter);
app.use('/api/v1/cutting_records', cuttingRecordsRouter);
app.use('/api/v1/register', registerRouter);
app.use('/api/v1/login', loginRouter);
app.use('/api/v1/garment_attributes', garmentAttributesRouter);
app.use('/api/v1/dashboard_sales', dashboardSalesRouter);

const PORT = process.env.SERVER_PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});