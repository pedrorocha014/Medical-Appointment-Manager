const dataAccess = require('../../modules/dataAccessModule');

var updateDoctorRegister = function (id, name, specialty) {
    const doctorsData = dataAccess.getDataFromFile("doctorDb.json");

    doctorsData.forEach((element, index) => {
        if (element.id == id) {
            const doctorToUpdate = {
                "id": id,
                "name": name,
                "specialty": specialty
            }
            doctorsData[index] = doctorToUpdate;
            dataAccess.updateDataFile("doctorDb.json", doctorsData);
        }
    });

    return doctorsData;
}

module.exports = updateDoctorRegister;