var express = require('express');
const doctorController = require('../controllers/doctorController');
const validateObject = require('../validators/doctorValidate');

var doctorRouter = express.Router();

doctorRouter.post('/register', validateObject.REGISTER , doctorController.create);
doctorRouter.get('/list', doctorController.read );
doctorRouter.put('/update', validateObject.UPDATE ,doctorController.update);
doctorRouter.delete('/delete', validateObject.DELETE ,doctorController.delete);

module.exports = doctorRouter;    