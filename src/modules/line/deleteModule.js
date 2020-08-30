const dataAccess = require('../../modules/dataAccessModule');

var deleteLineRegister = function(id){
    const lineData = dataAccess.getDataFromFile("lineDb.json");
    const newLine = lineData.filter(element => element.id != id);

    dataAccess.updateDataFile("lineDb.json", newLine);

    return newLine;
}

module.exports = deleteLineRegister;