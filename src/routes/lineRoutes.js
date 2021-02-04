var express = require('express');
const lineController = require('../controllers/lineController');
const validate = require('../validators/lineValidate');

var lineRouter = express.Router();

lineRouter.post('/register', validate('register') ,lineController.create);
lineRouter.get('/list', lineController.read );
lineRouter.get('/nextTreatment/:id' ,lineController.filter);
lineRouter.put('/attend', validate('attend') ,lineController.attend);
lineRouter.delete('/delete', validate('delete') ,lineController.delete);

module.exports = lineRouter;    