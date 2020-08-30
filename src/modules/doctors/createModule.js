const dataAccess = require('../../modules/dataAccessModule');

var createDoctorRegister = function(name, specialty){
    var doctorsData = dataAccess.getDataFromFile("doctorDb.json");

    var doctorToRegister = {
        "id": doctorsData.length,
        "name": name.toUpperCase(),
        "specialty": specialty.toUpperCase()
    }

    doctorsData[doctorsData.length] = doctorToRegister;

    dataAccess.updateDataFile("doctorDb.json", doctorsData);

    return doctorToRegister;
}

module.exports = createDoctorRegister;