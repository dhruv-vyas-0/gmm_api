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
            const { user_id, type, amount } = req.body;
            let rows, fields, log;

            switch (type) {
                case "credited":
                    var sql = 'INSERT INTO salary_payments(user_id, amount) values(?, ?);';
                    [rows, fields] = await pool.query(sql, [user_id, amount]);
                    [log, fields] = await pool.query("INSERT INTO payment_logs(user_id, type, amount) VALUES (?, ?, ?)", [user_id, type, amount]);
                    res.status(200).json({
                        status: 200,
                        paymentId: rows.insertId,
                        message: 'Payment was processed. Please check salary_status for confirmation.'
                    });
                    break;
                case "upad":
                    let [upad, field_] = await pool.query("SELECT upad FROM salary_status WHERE user_id = ?", [user_id]);
                    upad = upad[0].upad;
                    [rows, fields] = await pool.query("UPDATE salary_status SET upad = ? WHERE user_id = ?", [upad+amount, user_id]);
                    [log, fields] = await pool.query("INSERT INTO payment_logs(user_id, type, amount) VALUES (?, ?, ?)", [user_id, type, amount]);
                    res.status(200).json({
                        status: 200,
                        message: 'Upad was updated.'
                    });
                    break;
                case "jama":
                    let [jama, field1] = await pool.query("SELECT jama FROM salary_status WHERE user_id = ?", [user_id]);
                    jama = jama[0].jama;
                    [rows, fields] = await pool.query("UPDATE salary_status SET jama = ? WHERE user_id = ?", [jama+amount, user_id]);
                    [log, fields] = await pool.query("INSERT INTO payment_logs(user_id, type, amount) VALUES (?, ?, ?)", [user_id, type, amount]);
                    res.status(200).json({
                        status: 200,
                        message: 'Jama was updated.'
                    });
                    break;
            }
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