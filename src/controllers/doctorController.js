exports.create = async function(req, res){
    const createRegister = require('../modules/doctors/createModule');
    
    res.json(createRegister(req.body.name, req.body.specialty));
}

exports.read = async function(req, res){
    res.send("OK");
}

exports.update = async function(req, res){
    res.send("OK");
}

exports.delete = async function(req, res){
    res.send("OK");
}