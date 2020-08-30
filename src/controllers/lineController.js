exports.create = async function(req, res){
    const createRegister = require('../modules/line/createModule');
    res.json(createRegister(req.body.name, 
                            req.body.species,
                            req.body.breed, 
                            req.body.urgency,
                            req.body.specialty));
}

exports.read = async function(req, res){
    const readRegister = require('../modules/line/readModule');
    res.json(readRegister());
}

exports.delete = async function(req, res){
    const deleteRegister = require('../modules/line/deleteModule');
    res.json(deleteRegister(req.body.id));
}

exports.filter = async function(req, res){
    const filterRegister = require('../modules/line/filterModule');
    res.json(filterRegister(req.params.id));
}

exports.attend = async function(req, res){
    const attendLine = require('../modules/line/attendModule');
    res.json(attendLine(req.body.id, req.body.status));
}