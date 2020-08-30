exports.create = async function(req, res){
    const createRegister = require('../modules/doctors/createModule');
    res.json(createRegister(req.body.name, req.body.specialty));
}

exports.read = async function(req, res){
    const readRegister = require('../modules/doctors/readModule');
    res.json(readRegister());
}

exports.update = async function(req, res){
    const updateRegister = require('../modules/doctors/updateModule');
    res.json(updateRegister(req.body.id, req.body.name, req.body.specialty));
}

exports.delete = async function(req, res){
    const deleteRegister = require('../modules/doctors/deleteModule');
    res.json(deleteRegister(req.body.id));
}