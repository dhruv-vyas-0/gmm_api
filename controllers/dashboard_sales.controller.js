const pool = require('../database.connection');

const dashboardSalesController = {
    // GET : get by id
    getById: async (req, res) => {
        try {
            const { id } = req.params;
            sql = "SELECT month, sales FROM monthly_sales WHERE year=?";
            const [rows, fields] = await pool.query(sql, [id]);
            res.status(200).json({
                status: 200,
                year: id,
                chart: rows
            });
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }
};

module.exports = dashboardSalesController;