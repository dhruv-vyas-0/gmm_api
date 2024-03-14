const pool = require('../database.connection');

const loginController = {
    // POST : Attempt login
    login: async (req, res) => {
        try {
            const { email, password } = req.body;
            const [user_id, temp] = await pool.query("SELECT user_id FROM users WHERE email = ?", [email]);
            const [rows, fields] = await pool.query("SELECT password, role FROM credentials WHERE user_id = ?;", [user_id[0]]);
            if (rows.length === 0) {
                res.status(401).json({
                    message: "No such user"
                });
            } else if (password == rows[0].password) {
                const [user, fields] = await pool.query("SELECT * FROM users WHERE user_id = ?;", [user_id]);
                res.status(200).json({
                    message: "Login successfull",
                    role: rows[0].role,
                    data: user[0]
                })
            } else {
                res.status(401).json({
                    message: "Invalid Password"
                })
            }
        } catch (error) {
            console.log(error.message);
            res.status(500).json({
                data: error.message
            });
        }
    },
};

module.exports = loginController;