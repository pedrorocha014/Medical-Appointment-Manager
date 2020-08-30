var express = require('express');
var doctorRouter = express.Router();

const doctorController = require('./controllers/doctorController');

doctorRouter.post('/registerDoctor', doctorController.create);
doctorRouter.get('/listDoctor', doctorController.read );
doctorRouter.put('/updateDoctor', doctorController.update);
doctorRouter.delete('/deleteDoctor', doctorController.delete);

module.exports = doctorRouter;    