const dataAccess = require('../../modules/dataAccessModule');

var updateDoctorRegister = function(id, name, specialty){
    var doctorsData = dataAccess.getDataFromFile("doctorDb.json");

    var doctorToUpdate = {
        "id": id,
        "name": name,
        "specialty": specialty
    }

    doctorsData.doctors[id] = doctorToUpdate;

    dataAccess.updateDataFile("doctorDb.json", doctorsData);

    return doctorToUpdate;
}

module.exports = updateDoctorRegister;