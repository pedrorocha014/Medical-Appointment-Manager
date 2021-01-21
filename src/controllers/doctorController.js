const { validationResult } = require('express-validator');

exports.create = async function (req, res) { 
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const createRegister = require('../modules/doctors/createModule');
    res.json(createRegister(req.body.name, req.body.specialty));
}

exports.read = async function (req, res) {
    const readRegister = require('../modules/doctors/readModule');
    const data = await readRegister();

    res.json(data);
}

exports.update = async function (req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const updateRegister = require('../modules/doctors/updateModule');
    const data = await updateRegister(req.body.id, req.body.name, req.body.specialty);
    
    res.json(data);
}

exports.delete = async function (req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const deleteRegister = require('../modules/doctors/deleteModule');
    const data = await deleteRegister(req.body.id);

    res.json(data);
}