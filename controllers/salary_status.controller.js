const pool = require('../database.connection');

const salaryStatusController = {
    // GET : get salary status of all users
    getAll: async (req, res) => {
        try {
            const sql = 'SELECT * FROM salary_status;';
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

    // GET : get salary status by user_id
    getById: async (req, res) => {
        try {
            const {id} = req.params;
            const sql = 'SELECT * FROM salary_status WHERE user_id = ?;';
            const [rows, fields] = await pool.query(sql, [id]);
            res.status(200).json({
                status: 200,
                data: rows[0]
            });
        } catch (error) {
            console.log(error.message);
            res.status(500).json({
                status: 500,
                message: error.message
            });
        }
    },

    // PUT : update salary status
    updateSalaryStatus: async (req, res) => {
        try {
            const {id} = req.params;
            const {grand_total, upad, jama, credited} = req.body;
            const sql = 'UPDATE salary_status SET grand_total = ?, upad = ?, jama = ?, credited = ? WHERE user_id = ?;';
            const [rows, fields] = await pool.query(sql, [grand_total, upad, jama, credited, id]);
            res.status(200).json({
                status: 200,
                data: 'Salary status updated'
            });
        } catch(error) {
            console.log(error.message);
            res.status(500).json({
                status: 500,
                message: error.message
            });
        }
    },

    settleStatus: async (req, res) => {
        try {
            const {id} = req.params;
            let [pending, field] = await pool.query("SELECT pending FROM salary_status WHERE user_id = ?", [id]);
            pending = pending[0].pending;

            let upad=0, jama=0;
            if (pending > 0) {
                jama = pending;
            } else if (pending < 0) {
                upad = -pending;
            }

            const [rows, fields] = await pool.query("UPDATE salary_status SET grand_total = ?, upad = ?, jama = ?, credited = ? WHERE user_id = ?;", [0, upad, jama, 0, [id]]);
            res.status(200).json({
                status: 200,
                message: "Salary settled successfully."
            });
        } catch (error) {
            console.log(error.message);
            res.status(500).json({
                status: 500,
                message: error.message
            });
        }
    },
};

module.exports = salaryStatusController;