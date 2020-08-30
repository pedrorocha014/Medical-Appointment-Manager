var express = require('express');
var lineRouter = express.Router();

const lineController = require('../controllers/lineController');

lineRouter.post('/register', lineController.create);
lineRouter.get('/list', lineController.read );
lineRouter.get('/nextTreatment/:id', lineController.filter);
lineRouter.put('/attend', lineController.attend);
lineRouter.delete('/delete', lineController.delete);

module.exports = lineRouter;    