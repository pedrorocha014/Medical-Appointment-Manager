const express = require('express');
const bodyParser = require('body-parser');

const doctorRouter = require('./routes/doctorRoutes');
const lineRouter = require('./routes/lineRoutes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/doctor', doctorRouter);
app.use('/line', lineRouter);

app.listen('3000');