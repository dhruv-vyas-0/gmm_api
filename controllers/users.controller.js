const pool = require('../database.connection');

const usersController = {
    // GET : get all users
    getAll: async (req, res) => {
        try {
            const sql = 'SELECT * FROM users;';
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

    // GET : get user by id
    getById: async (req, res) => {
        try {
            const { id } = req.params;
            const sql = 'SELECT * FROM users WHERE user_id = ?;';
            const [rows, fields] = await pool.query(sql, [id]);
            res.status(200).json({
                data: rows[0]
            });
        } catch (error) {
            console.log(error.message);
            res.status(500).json({
                data: error.message
            });
        }
    },

    // POST : create a new user
    createUser: async (req, res) => {
        try {
            const { name, email, work_role } = req.body;
            const sql = 'INSERT INTO users(name, email, work_role) VALUES(?, ?, ?);'
            const [rows, fields] = await pool.query(sql, [name, email, work_role]);
            res.status(201).json({
                insertId: rows.insertId,
                data: 'User created'
            });
        } catch (error) {
            console.log(error.message);
            res.status(500).json({
                data: error.message
            });
        }
    },

    // PUT : update user information
    updateUser: async (req, res) => {
        try {
            const { id } = req.params;
            const { name, email, work_role } = req.body;
            const sql = 'UPDATE users SET name = ?, email = ?, work_role = ? WHERE user_id = ?;';
            const [rows, fields] = await pool.query(sql, [name, email, work_role, id]);
            res.status(200).json({
                data: 'User Updated'
            });
        } catch (error) {
            console.log(error.message);
            res.status(500).json({
                data: error.message
            });
        }
    },

    // DELETE : delete a user
    deleteUser: async (req, res) => {
        try {
            const { id } = req.params;
            const sql = 'DELETE from users WHERE user_id = ?;';
            const [rows, fields] = await pool.query(sql, [id]);
            res.status(200).json({
                data: 'User Deleted'
            });
        } catch (error) {
            console.log(error.message);
            res.status(500).json({
                data: error.message
            });
        }
    }
};

module.exports = usersController;