const Line = require('../../schemas/line');
const mongoose = require('mongoose');

const readLineRegister = async function(){
    const data = await Line.find();

    return data;
}

module.exports = readLineRegister;