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

            const sql = "SELECT stock FROM inventory WHERE pattern = ? AND design = ? AND colour = ? AND size = ?;";
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
            }
            else {
                const sql = "INSERT INTO selling_records(customer_id, pattern, design, colour, size, pieces) VALUES (?, ?, ?, ?, ?, ?);";
                const [rows, field] = await pool.query(sql, [customer_id, pattern, design, colour, size, pieces]);

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