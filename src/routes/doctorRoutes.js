var express = require('express');
var doctorRouter = express.Router();

const doctorController = require('../controllers/doctorController');

doctorRouter.post('/register', doctorController.create);
doctorRouter.get('/list', doctorController.read );
doctorRouter.put('/update', doctorController.update);
doctorRouter.delete('/delete', doctorController.delete);

module.exports = doctorRouter;    