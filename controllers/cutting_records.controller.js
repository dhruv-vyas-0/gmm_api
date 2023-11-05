const pool = require('../database.connection');

const cuttingRecordsController = {
    // GET : get all records
    getAll: async (req, res) => {
        try {
            const sql = 'SELECT * FROM cutting_records;';
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

    // GET : get all cutting records of a perticular person
    getById: async (req, res) => {
        try {
            const {id} = req.params;
            const sql = 'SELECT * FROM cutting_records WHERE user_id = ?;';
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

    // POST ; create a new cutting record
    createCuttingRecord: async (req, res) => {
        try {
            const {lot_no, user_id, date_, pattern, fabric, colour, s1, s2, s3, s4, s5, weight, price} = req.body;
            const sql = 'INSERT INTO cutting_records(lot_no, user_id, date_, pattern, fabric, colour, s1, s2, s3, s4, s5, weight, price) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);'
            const [rows, fields] = await pool.query(sql, [lot_no, user_id, date_, pattern, fabric, colour, s1, s2, s3, s4, s5, weight, price]);
            res.status(201).json({
                data: "New record was created successfully."
            });
        } catch (error) {
            console.log(error.message);
            res.status(500).json({
                data: error.message
            });
        }
    },

    // DELETE : Delete a record using lot no
    deleteRecord: async (req, res) => {
        try {
            const {lot_no} = req.params;
            const sql = 'DELETE FROM cutting_records WHERE lot_no = ?;';
            const [rows, fields] = await pool.query(sql, [lot_no]);
            res.status(200).json({
                data: "Record deleted."
            })
        } catch (error) {
            console.log(error.message);
            res.status(500).json({
                data: error.message
            });
        }
    }
};

module.exports = cuttingRecordsController;