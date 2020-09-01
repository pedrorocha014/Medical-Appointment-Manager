const dataAccess = require('../../modules/dataAccessModule');

const createDoctorRegister = function(name, specialty){
    const doctorsData = dataAccess.getDataFromFile("doctorDb.json");

    const doctorToRegister = {
        "id": doctorsData.length,
        "name": name.toUpperCase(),
        "specialty": specialty.toUpperCase()
    }

    doctorsData[doctorsData.length] = doctorToRegister;

    dataAccess.updateDataFile("doctorDb.json", doctorsData);

    return doctorToRegister;
}

module.exports = createDoctorRegister;