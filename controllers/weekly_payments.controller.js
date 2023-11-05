const pool = require('../database.connection');

const weeklyPaymnetsController = {
    // GET ; get all payments till now
    getAll: async (req, res) => {
        try {
            const sql = 'SELECT * FROM weekly_payments;';
            const [rows, fields] = await pool.query(sql);
            res.status(200).json({
                data: rows
            });
        } catch (error) {
            console.log(error.message);
            res.status(500).json({
                data: error.message
            });
        }
    },

    // GET : get payments done to a particular user
    getById: async (req, res) => {
        try {
            const { id } = req.params;
            const sql = 'SELECT * FROM weekly_payments WHERE user_id = ?;';
            const [rows, fields] = await pool.query(sql, [id]);
            res.status(200).json({
                data: rows
            });
        } catch (error) {
            console.log(error.message);
            res.status(500).json({
                data: error.message
            });
        }
    },

    // POST : make a new payment
    createPayment: async (req, res) => {
        try {
            const { user_id, year_, month, week, amount } = req.body;
            const sql = 'INSERT INTO weekly_payments(user_id, year_, month, week, amount) values(?, ?, ?, ?, ?);';
            const [rows, fields] = await pool.query(sql, [user_id, year_, month, week, amount]);
            res.status(201).json({
                paymentId: rows.insertId,
                data: 'Payment was processed. Please check salary_status for confirmation.'
            });
        } catch (error) {
            console.log(error.message);
            res.status(500).json({
                data: error.message
            });
        }
    }
};
module.exports = weeklyPaymnetsController;