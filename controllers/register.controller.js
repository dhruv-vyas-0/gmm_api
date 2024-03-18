const pool = require('../database.connection');

const registerController = {
    // POST : Generate password
    register: async (req, res) => {
        try {
            const { email, password, role } = req.body;
            let [user_id, temp] = await pool.query("SELECT user_id FROM users WHERE email = ?", [email]);
            if (user_id.length === 0) {
                res.status(500).json({
                    status: 500,
                    message: "No such user"
                });
            } else {
                user_id = user_id[0].user_id;
                const sql = "INSERT INTO credentials(user_id, password, role) VALUES(?, ?, ?);";
                const [rows, fields] = await pool.query(sql, [user_id, password, role]);
                res.status(200).json({
                    status: 200,
                    message: "Password generated successfully"
                });
            }
        } catch (error) {
            console.log(error.message);
            res.status(500).json({
                status: 500,
                message: error.message
            });
        }
    },

    // PUT : Change Password or Role
    update: async (req, res) => {
        try {
            const { email, password, role } = req.body;
            let [user_id, temp] = await pool.query("SELECT user_id FROM users WHERE email = ?", [email]);
            user_id = user_id[0].user_id;
            const sql = "UPDATE credentials SET password = ?, role = ? WHERE user_id = ?;";
            const [rows, fields] = await pool.query(sql, [password, role, user_id]);
            res.status(200).json({
                status: 200,
                message: "Password updation successfull"
            });
        } catch (error) {
            console.log(error.message);
            res.status(500).json({
                status: 500,
                message: error.message
            });
        }
    },
}

module.exports = registerController;