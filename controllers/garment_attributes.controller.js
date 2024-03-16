const pool = require('../database.connection');

const garmentAttributesController = {
    // GET : get all attributes
    getAll: async (req, res) => {
        try {
            const [patterns, fields1] = await pool.query("SELECT * FROM patterns;");
            const [designs, fields2] = await pool.query("SELECT * FROM designs;");
            const [colours, fields3] = await pool.query("SELECT * FROM colours;");
            const [sizes, fields4] = await pool.query("SELECT * FROM sizes;");

            for (let i = 0; i < patterns.length; i++) {
                patterns[i] = patterns[i].pattern;
            }

            for (let i = 0; i < designs.length; i++) {
                designs[i] = designs[i].design;
            }

            for (let i = 0; i < colours.length; i++) {
                colours[i] = colours[i].colour;
            }

            for (let i = 0; i < sizes.length; i++) {
                sizes[i] = sizes[i].size;
            }

            res.status(200).json({
                status: 200,
                data: {
                    patterns: patterns,
                    designs: designs,
                    colours: colours,
                    sizes: sizes
                }
            });
        } catch (error) {
            console.log(error.message);
            res.status(500).json({
                status: 500,
                message: error.message
            });
        }
    },

    // GET : /patterns : get all patterns
    getPatterns: async (req, res) => {
        try {
            const [patterns, fields] = await pool.query("SELECT * FROM patterns;");

            for (let i = 0; i < patterns.length; i++) {
                patterns[i] = patterns[i].pattern;
            }

            res.status(200).json({
                status: 200,
                patterns: patterns
            })
        } catch (error) {
            console.log(error.message);
            res.status(500).json({
                status: 500,
                message: error.message
            });
        }
    },

    // POST : /patterns : create a new pattern
    createPattern: async (req, res) => {
        try {
            const { pattern } = req.body;
            const [rows, fields] = await pool.query("INSERT INTO patterns(pattern) VALUES(?);", [pattern]);
            res.status(200).json({
                status: 200,
                message: `Pattern added ${pattern}`
            });
        } catch (error) {
            console.log(error.message);
            res.status(500).json({
                status: 500,
                message: error.message
            });
        }
    },

    // PUT : /patterns : update a pattern
    updatePattern: async (req, res) => {
        try {
            const { before, after } = req.body;
            const [rows, fields] = await pool.query("UPDATE patterns SET pattern = ? WHERE pattern = ?;", [after, before]);
            if (rows.affectedRows === 0) {
                res.status(404).json({
                    status: 404,
                    message: "No such Pattern"
                });
            } else {
                res.status(200).json({
                    status: 200,
                    message: `${before} changed to ${after}`
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

    // DELETE : /patterns : delete a pattern
    deletePattern: async (req, res) => {
        try {
            const { pattern } = req.body;
            const [rows, fields] = await pool.query("DELETE FROM patterns WHERE pattern = ?;", [pattern]);
            res.status(200).json({
                status: 200,
                message: `${pattern} pattern was deleted`
            });
        } catch (error) {
            console.log(error.message);
            res.status(500).json({
                status: 500,
                message: error.message
            });
        }
    },

    // GET : /designs : get all designs
    getDesigns: async (req, res) => {
        try {
            const [designs, fields] = await pool.query("SELECT * FROM designs;");

            for (let i = 0; i < designs.length; i++) {
                designs[i] = designs[i].design;
            }

            res.status(200).json({
                status: 200,
                designs: designs
            });
        } catch (error) {
            console.log(error.message);
            res.status(500).json({
                status: 500,
                message: error.message
            });
        }
    },

    // POST : /designs : create a new design
    createDesign: async (req, res) => {
        try {
            const { design } = req.body;
            const [rows, fields] = await pool.query("INSERT INTO designs(design) VALUES(?);", [design]);
            res.status(200).json({
                status: 200,
                message: `Design added ${design}`
            });
        } catch (error) {
            console.log(error.message);
            res.status(500).json({
                status: 500,
                message: error.message
            });
        }
    },

    // PUT : /designs : update a design
    updateDesign: async (req, res) => {
        try {
            const { before, after } = req.body;
            const [rows, fields] = await pool.query("UPDATE designs SET design = ? WHERE design = ?;", [after, before]);
            if (rows.affectedRows === 0) {
                res.status(404).json({
                    status: 404,
                    message: "No such Design"
                });
            } else {
                res.status(200).json({
                    status: 200,
                    message: `${before} changed to ${after}`
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

    // DELETE : /designs : delete a design
    deleteDesign: async (req, res) => {
        try {
            const { design } = req.body;
            const [rows, fields] = await pool.query("DELETE FROM designs WHERE design = ?;", [design]);
            res.status(200).json({
                status: 200,
                message: `${design} design was deleted`
            });
        } catch (error) {
            console.log(error.message);
            res.status(500).json({
                status: 500,
                message: error.message
            });
        }
    },

    // GET : /colours : get all colours
    getColours: async (req, res) => {
        try {
            const [colours, fields] = await pool.query("SELECT * FROM colours;");

            for (let i = 0; i < colours.length; i++) {
                colours[i] = colours[i].colour;
            }

            res.status(200).json({
                status: 200,
                colours: colours
            });
        } catch (error) {
            console.log(error.message);
            res.status(500).json({
                status: 500,
                message: error.message
            });
        }
    },

    // POST : /colours : create a new Colour
    createColour: async (req, res) => {
        try {
            const { colour } = req.body;
            const [rows, fields] = await pool.query("INSERT INTO colours(colour) VALUES(?);", [colour]);
            res.status(200).json({
                status: 200,
                message: `Colour added ${colour}`
            });
        } catch (error) {
            console.log(error.message);
            res.status(500).json({
                status: 500,
                message: error.message
            });
        }
    },

    // PUT : /colours : update a Colour
    updateColour: async (req, res) => {
        try {
            const { before, after } = req.body;
            const [rows, fields] = await pool.query("UPDATE colours SET colour = ? WHERE colour = ?;", [after, before]);
            if (rows.affectedRows === 0) {
                res.status(404).json({
                    status: 404,
                    message: "No such Colour"
                });
            } else {
                res.status(200).json({
                    status: 200,
                    message: `${before} changed to ${after}`
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

    // DELETE : /colours : delete a Colour
    deleteColour: async (req, res) => {
        try {
            const { colour } = req.body;
            const [rows, fields] = await pool.query("DELETE FROM colours WHERE colour = ?;", [colour]);
            res.status(200).json({
                status: 200,
                message: `${colour} colour was deleted`
            });
        } catch (error) {
            console.log(error.message);
            res.status(500).json({
                status: 500,
                message: error.message
            });
        }
    },

    // GET : /sizes : get all sizes
    getSizes: async (req, res) => {
        try {
            const [sizes, fields] = await pool.query("SELECT * FROM sizes;");

            for (let i = 0; i < sizes.length; i++) {
                sizes[i] = sizes[i].size;
            }

            res.status(200).json({
                status: 200,
                sizes: sizes
            });
        } catch (error) {
            console.log(error.message);
            res.status(500).json({
                status: 500,
                message: error.message
            });
        }
    },

    // POST : /sizes : create a new Size
    createSize: async (req, res) => {
        try {
            const { size } = req.body;
            const [rows, fields] = await pool.query("INSERT INTO sizes(size) VALUES(?);", [size]);
            res.status(200).json({
                status: 200,
                message: `Size added ${size}`
            });
        } catch (error) {
            console.log(error.message);
            res.status(500).json({
                status: 500,
                message: error.message
            });
        }
    },

    // PUT : /sizes : update a Size
    updateSize: async (req, res) => {
        try {
            const { before, after } = req.body;
            const [rows, fields] = await pool.query("UPDATE sizes SET size = ? WHERE size = ?;", [after, before]);
            if (rows.affectedRows === 0) {
                res.status(404).json({
                    status: 404,
                    message: "No such size"
                });
            } else {
                res.status(200).json({
                    status: 200,
                    message: `${before} changed to ${after}`
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

    // DELETE : /sizes : delete a Size
    deleteSize: async (req, res) => {
        try {
            const { size } = req.body;
            const [rows, fields] = await pool.query("DELETE FROM sizes WHERE size = ?;", [size]);
            res.status(200).json({
                status: 200,
                message: `${size} size was deleted`
            });
        } catch (error) {
            console.log(error.message);
            res.status(500).json({
                status: 500,
                message: error.message
            });
        }
    },
};

module.exports = garmentAttributesController;