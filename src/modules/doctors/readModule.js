const dataAccess = require('../../modules/dataAccessModule');

var readDoctorRegister = function(){
    var doctorsData = dataAccess.getDataFromFile("doctorDb.json");

    return doctorsData;
}

module.exports = readDoctorRegister;