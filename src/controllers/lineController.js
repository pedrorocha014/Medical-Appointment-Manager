const { validationResult } = require('express-validator');

exports.create = async function (req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    
    const createRegister = require('../modules/line/createModule');
    res.json(createRegister(req.body.name,
        req.body.species,
        req.body.breed,
        req.body.urgency,
        req.body.specialty));
}

exports.read = async function (req, res) {
    const readRegister = require('../modules/line/readModule');
    const data = await readRegister(); 

    res.json(data);
}

exports.delete = async function (req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const deleteRegister = require('../modules/line/deleteModule');
    const data = await deleteRegister(req.body.id);

    res.json(data);
}

exports.filter = async function (req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const filterRegister = require('../modules/line/filterModule');
    const data = await filterRegister(req.params.id);
    res.json(data);
}

exports.attend = async function (req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const attendLine = require('../modules/line/attendModule');
    const data = await attendLine(req.body.id);

    res.json(data);
}