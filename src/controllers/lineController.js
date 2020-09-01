exports.create = async function(req, res){
    const createRegister = require('../modules/line/createModule');

    const validateObject = require('../validators/line/createValidator');
    const validateResult = validateObject(req.body.name, 
                                          req.body.species,
                                          req.body.breed, 
                                          req.body.urgency,
                                          req.body.specialty);

    if(validateResult.isValidate){
        res.json(createRegister(req.body.name, 
                                req.body.species,
                                req.body.breed, 
                                req.body.urgency,
                                req.body.specialty));
    }else{
        res.json(validateResult);
    }
}

exports.read = async function(req, res){
    const readRegister = require('../modules/line/readModule');
    res.json(readRegister());
}

exports.delete = async function(req, res){
    const deleteRegister = require('../modules/line/deleteModule');

    const validateObject = require('../validators/line/deleteValidator');
    const validateResult = validateObject(req.body.id);

    if(validateResult.isValidate){
        res.json(deleteRegister(req.body.id));
    }else{
        res.json(validateResult);
    }   
}

exports.filter = async function(req, res){
    const filterRegister = require('../modules/line/filterModule');

    const validateObject = require('../validators/line/filterValidator');
    const validateResult = validateObject(req.params.id);

    if(validateResult.isValidate){
        res.json(filterRegister(req.params.id));
    }else{
        res.json(validateResult);
    }   
}

exports.attend = async function(req, res){
    const attendLine = require('../modules/line/attendModule');

    const validateObject = require('../validators/line/attendValidator');
    const validateResult = validateObject(req.body.id);

    if(validateResult.isValidate){
        res.json(attendLine(req.body.id));
    }else{
        res.json(validateResult);
    }
}