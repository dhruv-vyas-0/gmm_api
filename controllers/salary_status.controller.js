const pool = require('../database.connection');

const salaryStatusController = {
    // GET : get salary status of all users
    getAll: async (req, res) => {
        try {
            const sql = 'SELECT * FROM salary_status;';
            const [rows, fields] = await pool.query(sql);
            res.status(200).json({
                data: rows
            });
        } catch (error) {
            console.log(error.message);
            res.status(500).json({
                error: error.message
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
                data: rows[0]
            });
        } catch (error) {
            console.log(error.message);
            res.status(500).json({
                error: error.message
            });
        }
    },

    // PUT : update salary status
    updateSalaryStatus: async (req, res) => {
        try {
            const {id} = req.params;
            const {grand_total, upad, jama, credited} = req.body;
            const sql = 'UPDATE salary_status SET grand_total = ?, upad = ?, jama = ?, credited = ?;';
            const [rows, fields] = await pool.query(sql, [grand_total, upad, jama, credited]);
            res.status(200).json({
                data: 'Salary status updated'
            });
        } catch(error) {
            console.log(error.message);
            res.status(500).json({
                error: error.message
            });
        }
    }
};

module.exports = salaryStatusController;