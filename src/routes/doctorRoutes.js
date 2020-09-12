var express = require('express');
const doctorController = require('../controllers/doctorController');
const validate = require('../validators/doctorValidate');

var doctorRouter = express.Router();

doctorRouter.post('/register', validate('register') , doctorController.create);
doctorRouter.get('/list', doctorController.read );
doctorRouter.put('/update', validate('update') ,doctorController.update);
doctorRouter.delete('/delete', validate('delete') ,doctorController.delete);

module.exports = doctorRouter;    