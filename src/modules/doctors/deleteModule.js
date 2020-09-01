const dataAccess = require('../../modules/dataAccessModule');

const deleteDoctorRegister = function(id){
    const doctorsData = dataAccess.getDataFromFile("doctorDb.json");
    const newDoctor = doctorsData.filter(doctor => doctor.id != id);

    dataAccess.updateDataFile("doctorDb.json", newDoctor);

    return newDoctor;
}

module.exports = deleteDoctorRegister;