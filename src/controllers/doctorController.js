exports.create = async function (req, res) {
    const createRegister = require('../modules/doctors/createModule');

    const validateObject = require('../validators/doctors/createValidator');
    const validateResult = validateObject(req.body.name, req.body.specialty);

    if (validateResult.isValidate) { 
        res.json(createRegister(req.body.name, req.body.specialty)); 
    }else{
        res.json(validateResult);
    }
}

exports.read = async function (req, res) {
    const readRegister = require('../modules/doctors/readModule');
    res.json(readRegister());
}

exports.update = async function (req, res) {
    const updateRegister = require('../modules/doctors/updateModule');

    const validateObject = require('../validators/doctors/updateValidator');
    const validateResult = validateObject(req.body.id, req.body.name, req.body.specialty);

    if (validateResult.isValidate) { 
        res.json(updateRegister(req.body.id, req.body.name, req.body.specialty)); 
    }else{
        res.json(validateResult);
    }
}

exports.delete = async function (req, res) {
    const deleteRegister = require('../modules/doctors/deleteModule');

    const validateObject = require('../validators/doctors/deleteValidator');
    const validateResult = validateObject(req.body.id);

    if (validateResult.isValidate) { 
        res.json(deleteRegister(req.body.id));
    }else{
        res.json(validateResult);
    }
}