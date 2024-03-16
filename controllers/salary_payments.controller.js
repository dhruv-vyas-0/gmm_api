const pool = require('../database.connection');

const salaryPaymentsController = {
    // GET ; get all payments till now
    getAll: async (req, res) => {
        try {
            const sql = 'SELECT * FROM salary_payments;';
            const [rows, fields] = await pool.query(sql);
            res.status(200).json({
                status: 200,
                data: rows
            });
        } catch (error) {
            console.log(error.message);
            res.status(500).json({
                status: 500,
                message: error.message
            });
        }
    },

    // GET : get payments done to a particular user
    getById: async (req, res) => {
        try {
            const { id } = req.params;
            const sql = 'SELECT * FROM salary_payments WHERE user_id = ?;';
            const [rows, fields] = await pool.query(sql, [id]);
            res.status(200).json({
                status: 200,
                data: rows
            });
        } catch (error) {
            console.log(error.message);
            res.status(500).json({
                status: 500,
                message: error.message
            });
        }
    },

    // POST : make a new payment
    createPayment: async (req, res) => {
        try {
            const { user_id, amount } = req.body;
            const sql = 'INSERT INTO salary_payments(user_id, amount) values(?, ?);';
            const [rows, fields] = await pool.query(sql, [user_id, amount]);
            res.status(200).json({
                status: 200,
                paymentId: rows.insertId,
                data: 'Payment was processed. Please check salary_status for confirmation.'
            });
        } catch (error) {
            console.log(error.message);
            res.status(500).json({
                status: 500,
                message: error.message
            });
        }
    }
};
module.exports = salaryPaymentsController;