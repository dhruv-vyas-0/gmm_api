const pool = require('../database.connection');

const sellingRecordController = {
    // GET : get all the selling records
    getAll: async (req, res) => {
        try {
            const [rows, fields] = await pool.query("SELECT * FROM selling_records;");
            res.status(200).json({
                status: 200,
                data: rows
            });
        } catch (error) {
            res.status(500).json({
                status: 500,
                message: error.message
            });
        }
    },

    // POST : /particular : Get selling records of a particular product
    getParticular: async (req, res) => {
        try {
            const { pattern, design, colour, size } = req.body;
            const sql = "SELECT * FROM selling_records WHERE pattern = ? AND design = ? AND colour = ? AND size = ?;";
            const [rows, fields] = await pool.query(sql, [pattern, design, colour, size]);
            res.status(200).json({
                status: 200,
                data: rows
            });
        } catch (error) {
            res.status(500).json({
                status: 500,
                message: error.message
            });
        }
    },

    // POST : create a new record
    createRecord: async (req, res) => {
        try {
            const { customer_id, pattern, design, colour, size, pieces } = req.body;

            const sql = "SELECT stock, min_price FROM inventory WHERE pattern = ? AND design = ? AND colour = ? AND size = ?;";
            const [records, fields] = await pool.query(sql, [pattern, design, colour, size]);

            if (records.length === 0) {
                res.status(404).json({
                    status: 404,
                    message: "No such product available."
                });
            } else if (records[0].stock < pieces) {
                res.status(400).json({
                    status: 400,
                    message: "Not enough stock."
                });
            } else if (records[0].min_price === 0) {
                res.status(400).json({
                    status: 400,
                    message: "Selling not allowed when cost is zero"
                });
            } else if (pieces === 0) {
                res.status(400).json({
                    status: 400,
                    message: "Selling not allowed when pieces is zero"
                });
            } else {
                const sql = "INSERT INTO selling_records(customer_id, pattern, design, colour, size, pieces, amount) VALUES (?, ?, ?, ?, ?, ?, ?);";
                const [rows, field] = await pool.query(sql, [customer_id, pattern, design, colour, size, pieces, pieces * records[0].min_price]);

                res.status(200).json({
                    status: 200,
                    message: "Record created successfully."
                });
            }
        } catch (error) {
            res.status(500).json({
                status: 500,
                message: error.message
            });
        }
    },
};

module.exports = sellingRecordController;