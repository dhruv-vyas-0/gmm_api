const pool = require('../database.connection');

const inventoryController = {
    // GET : Get all the inventory records
    getAll: async (req, res) => {
        try {
            const [rows, fields] = await pool.query("SELECT * FROM inventory;");
            res.status(200).json({
                status: 200,
                data: rows
            });
        } catch (error) {
            res.status(500).json({
                status: 500,
                message: error.message
            })
        }
    },

    // GET : /particular : get a particular record
    getParticular: async (req, res) => {
        try {
            const { pattern, design, colour, size } = req.body;
            const sql = "SELECT * FROM inventory WHERE pattern = ? AND design = ? AND colour = ? AND size = ?;";
            const [rows, fields] = await pool.query(sql, [pattern, design, colour, size]);
            res.status(200).json({
                status: 200,
                data: rows[0]
            });
        } catch (error) {
            res.status(500).json({
                status: 500,
                message: error.message
            })
        }
    },

    // PUT : /cost_margin : Update cost Margin of a record
    updateCostMargin: async (req, res) => {
        try {
            const { pattern, design, colour, size, cost, margin } = req.body;
            const sql = "UPDATE inventory SET cost = ?, margin = ? WHERE pattern = ? AND design = ? AND colour = ? AND size = ?;"
            const [rows, fields] = await pool.query(sql, [cost, margin, pattern, design, colour, size]);
            res.status(200).json({
                status: 200,
                message: "Cost and Margin updated successfully"
            });
        } catch (error) {
            res.status(500).json({
                status: 500,
                message: error.message
            })
        }
    },

    // PUT : /stock : Update the stock of a record
    updateStock: async (req, res) => {
        try {
            const { pattern, design, colour, size, stock } = req.body;
            const sql = "UPDATE inventory SET stock = ? WHERE pattern = ? AND design = ? AND colour = ? AND size = ?;"
            const [rows, fields] = await pool.query(sql, [stock, pattern, design, colour, size]);
            res.status(200).json({
                status: 200,
                message: "Stock updated successfully"
            });
        } catch (error) {
            res.status(500).json({
                status: 500,
                message: error.message
            })
        }
    },
};

module.exports = inventoryController;