const dataAccess = require('../../modules/dataAccessModule');

var createDoctorRegister = function(name, specialty){
    var doctorsData = dataAccess.getDataFromFile("doctorDb.json");

    var doctorToRegister = {
        "id": doctorsData.doctors.length,
        "name": name.toUpperCase(),
        "specialty": specialty.toUpperCase()
    }

    doctorsData.doctors[doctorsData.doctors.length] = doctorToRegister;

    dataAccess.updateDataFile("doctorDb.json", doctorsData);

    return doctorToRegister;
}

module.exports = createDoctorRegister;