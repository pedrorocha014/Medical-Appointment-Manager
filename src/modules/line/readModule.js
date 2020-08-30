const dataAccess = require('../../modules/dataAccessModule');

const readLineRegister = function(){
    const lineData = dataAccess.getDataFromFile("lineDb.json");

    return lineData;
}

module.exports = readLineRegister;