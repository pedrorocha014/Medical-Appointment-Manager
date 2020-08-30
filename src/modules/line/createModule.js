const dataAccess = require('../../modules/dataAccessModule');

const createLineRegister = function(name, species, breed, urgency, specialty){
    const lineData = dataAccess.getDataFromFile("lineDb.json");

    const addToLine = {
        "id": lineData.length,
        "name": name.toUpperCase(),
        "species": species.toUpperCase(),
        "breed": breed.toUpperCase(),
        "urgency": urgency,
        "specialty": specialty.toUpperCase(),
        "status": "PENDENTE"
    }

    lineData[lineData.length] = addToLine;

    dataAccess.updateDataFile("lineDb.json", lineData);

    return addToLine;
}

module.exports = createLineRegister;