const dataAccess = require('../../modules/dataAccessModule');

const readDoctorRegister = function(){
    const doctorsData = dataAccess.getDataFromFile("doctorDb.json");

    return doctorsData;
}

module.exports = readDoctorRegister;