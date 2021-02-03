const express = require('express');
const bodyParser = require('body-parser');
const expressSession = require('express-session');
const config = require('../config');
const mongoose = require('mongoose');

const doctorRouter = require('./routes/doctorRoutes');
const lineRouter = require('./routes/lineRoutes');

const app = express();

mongoose.connect("mongodb+srv://pedrorocha:"+config.mongoose.password+"@medical-appointment-man.zmrfp.mongodb.net/test?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(expressSession({ secret: 'max', saveUninitialized: false, resave: false }));

app.use('/doctor', doctorRouter);
app.use('/line', lineRouter);

app.listen('3000');