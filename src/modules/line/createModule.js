const dataAccess = require('../../modules/dataAccessModule');

const createLineRegister = function(name, species, breed, urgency, specialty){

    const newData = {
        "id": 0,
        "name": name.toUpperCase(),
        "species": species.toUpperCase(),
        "breed": breed.toUpperCase(),
        "urgency": urgency,
        "specialty": specialty.toUpperCase(),
        "status": "PENDENTE"
    }

    //cadastrando a consulta no banco de consultas
    const appointmentData = dataAccess.getDataFromFile("appointmentDb.json");
    newData.id = appointmentData.length;
    appointmentData[appointmentData.length] = newData;
    dataAccess.updateDataFile("appointmentDb.json", appointmentData);

    //cadastrando a consulta na fila
    const lineData = dataAccess.getDataFromFile("lineDb.json");
    lineData[lineData.length] = newData;
    dataAccess.updateDataFile("lineDb.json", lineData);

    return newData;
}

module.exports = createLineRegister;