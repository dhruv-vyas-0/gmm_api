const pool = require('../database.connection');

const customersController = {
    // GET : Get records of all customers
    getAll: async (req, res) => {
        try {
            const [customers, fields] = await pool.query("SELECT * FROM customers;");

            for (let i = 0; i < customers.length; i++) {
                const [bill, fields2] = await pool.query("SELECT amount FROM customer_bill WHERE customer_id = ?;", [customers[i].customer_id]);
                customers[i].bill = bill[0];
            }

            res.status(200).json({
                status: 200,
                data: customers
            });
        } catch (error) {
            res.status(500).json({
                status: 500,
                message: error.message
            });
        }
    },

    // GET : Get a record of a particular customer
    getById: async (req, res) => {
        try {
            const { id } = req.params;
            const [customer, field] = await pool.query("SELECT * FROM customers WHERE customer_id = ?;", [id]);
            const [bill, fields] = await pool.query("SELECT amount FROM customer_bill WHERE customer_id = ?;", [id]);
            customer[0].bill = bill[0];
            res.status(200).json({
                status: 200,
                data: customer[0]
            });
        } catch (error) {
            res.status(500).json({
                status: 500,
                message: error.message
            });
        }
    },

    // POST : Create a new customer
    createCustomer: async (req, res) => {
        try {
            const { name, email, phone } = req.body;
            const [rows, field] = await pool.query("INSERT INTO customers(name, email, phone) VALUES(?, ?, ?);", [name, email, phone]);
            res.status(200).json({
                status: 200,
                message: "Customer created successfully"
            });
        } catch (error) {
            res.status(500).json({
                status: 500,
                message: error.message
            });
        }
    },

    // PUT : Update a customer record
    updateCustomer: async (req, res) => {
        try {
            const { id } = req.params;
            const { name, email, phone } = req.body;
            const [row, fields] = await pool.query("UPDATE customers SET name = ?, email = ?, phone = ? WHERE customer_id = ?;", [name, email, phone, id]);
            res.status(200).json({
                status: 200,
                message: "Customer updated successfully"
            });
        } catch (error) {
            res.status(500).json({
                status: 500,
                message: error.message
            });
        }
    },

    // DELETE : Delete a customer record
    deleteCustomer: async (req, res) => {
        try {
            const { id } = req.params;
            const [row, field] = await pool.query("DELETE FROM customers WHERE customer_id = ?;", [id]);
            res.status(200).json({
                status: 200,
                message: "Customer deleted successfully"
            });
        } catch (error) {
            res.status(500).json({
                status: 500,
                message: error.message
            });
        }
    },

    // PUT : /bill : Update the bill of a customer
    updateBill: async (req, res) => {
        try {
            const { id } = req.params;
            const { amount } = req.body;
            const [row, field] = await pool.query("UPDATE customer_bill SET amount = ? WHERE customer_id = ?;", [amount, id]);
            res.status(200).json({
                status: 200,
                message: "Bill updated successfully"
            });
        } catch (error) {
            res.status(500).json({
                status: 500,
                message: error.message
            });
        }
    },
};

module.exports = customersController;