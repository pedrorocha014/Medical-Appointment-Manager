var express = require('express');
const lineController = require('../controllers/lineController');
const validateObject = require('../validators/lineValidate');

var lineRouter = express.Router();

lineRouter.post('/register', validateObject.REGISTER ,lineController.create);
lineRouter.get('/list', lineController.read );
lineRouter.get('/nextTreatment/:id', validateObject.NEXTREATMENT ,lineController.filter);
lineRouter.put('/attend', validateObject.ATTEND ,lineController.attend);
lineRouter.delete('/delete', validateObject.DELETE ,lineController.delete);

module.exports = lineRouter;    