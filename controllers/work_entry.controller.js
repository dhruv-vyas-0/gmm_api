const pool = require('../database.connection');

const workEntryController = {
    // GET : get all work entries
    getAll: async (req, res) => {
        try {
            const sql = 'SELECT * FROM work_entry;';
            const [rows, fields] = await pool.query(sql);
            res.status(200).json({
                data: rows
            });
        } catch (error) {
            console.log(error.message)
            res.status(500).json({
                data: error.message
            });
        }
    },

    // GET : get all work done by a particular person
    getById: async (req, res) => {
        try {
            const { id } = req.params;
            const sql = 'SELECT * FROM work_entry WHERE user_id = ?;';
            const [rows, fields] = await pool.query(sql, [id]);
            res.status(200).json({
                data: rows
            });
        } catch (error) {
            console.log(error.message)
            res.status(500).json({
                data: error.message
            });
        }
    },

    // POST : create a new work entry
    createWorkEntry: async (req, res) => {
        try {
            const { user_id, date_, pattern, design, colour, size_, piece, rate, upad, jama } = req.body;
            const sql = 'INSERT INTO work_entry(user_id, date_, pattern, design, colour, size_, piece, rate, upad, jama) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?);';
            const [rows, fields] = await pool.query(sql, [user_id, date_, pattern, design, colour, size_, piece, rate, upad, jama]);
            res.status(201).json({
                data: "Work has been created. It will be reflected into salary status."
            })
        } catch (error) {
            console.log(error.message)
            res.status(500).json({
                data: error.message
            });
        }
    }
};

module.exports = workEntryController;