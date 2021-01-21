const Doctor = require('../../schemas/doctor');
const mongoose = require('mongoose');

const createDoctorRegister = function (name, specialty) {

    const doctor = new Doctor({
        _id: new mongoose.Types.ObjectId(),
        name: name.toUpperCase(),
        specialty: specialty.toUpperCase()
    });

    doctor.save();

    return doctor;
}

module.exports = createDoctorRegister;