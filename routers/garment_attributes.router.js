const Router = require('express').Router;
const garmentAttributesController = require('../controllers/garment_attributes.controller');

const garmentAttributesRouter = Router();

// GET : get all attributes
garmentAttributesRouter.get('/', garmentAttributesController.getAll);

/* Route /patterns */
// GET : get all patterns
garmentAttributesRouter.get('/patterns', garmentAttributesController.getPatterns);
// POST : create a new pattern
garmentAttributesRouter.post('/patterns', garmentAttributesController.createPattern);
// PUT : update a pattern
garmentAttributesRouter.put('/patterns', garmentAttributesController.updatePattern);
// DELETE : delete a pattern
garmentAttributesRouter.delete('/patterns', garmentAttributesController.deletePattern);

/* Route /designs */
// GET : get all designs
garmentAttributesRouter.get('/designs', garmentAttributesController.getDesigns);
// POST : create a new design
garmentAttributesRouter.post('/designs', garmentAttributesController.createDesign);
// PUT : update a design
garmentAttributesRouter.put('/designs', garmentAttributesController.updateDesign);
// DELETE : delete a design
garmentAttributesRouter.delete('/designs', garmentAttributesController.deleteDesign);

/* Route /colours */
// GET : get all colours
garmentAttributesRouter.get('/colours', garmentAttributesController.getColours);
// POST : create a new Colour
garmentAttributesRouter.post('/colours', garmentAttributesController.createColour);
// PUT : update a Colour
garmentAttributesRouter.put('/colours', garmentAttributesController.updateColour);
// DELETE : delete a Colour
garmentAttributesRouter.delete('/colours', garmentAttributesController.deleteColour);

/* Route /sizes */
// GET : get all sizes
garmentAttributesRouter.get('/sizes', garmentAttributesController.getSizes);
// POST : create a new Size
garmentAttributesRouter.post('/sizes', garmentAttributesController.createSize);
// PUT : update a Size
garmentAttributesRouter.put('/sizes', garmentAttributesController.updateSize);
// DELETE : delete a Size
garmentAttributesRouter.delete('/sizes', garmentAttributesController.deleteSize);

module.exports = garmentAttributesRouter;