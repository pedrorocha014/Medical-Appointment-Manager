const dataAccess = require('../../modules/dataAccessModule');

const filterRegister = function(doctorId){
    const doctorData = dataAccess.getDataFromFile("doctorDb.json").find(doctor => doctor.id == doctorId);
    const lineData = dataAccess.getDataFromFile("lineDb.json");
    const nextTreatment = lineData.find(element => element.specialty == doctorData.specialty);

    return nextTreatment;
}

module.exports = filterRegister;