const Line = require('../../schemas/line');
const Doctor = require('../../schemas/doctor');
const mongoose = require('mongoose');

const filterRegister = async function (doctorId) {
    const doctor = await Doctor.findById(doctorId);
    let line = await Line.findOne({
        specialty: doctor.specialty,
        urgency: true
    });

    console.log(line);

    if (line == null) {
        line = await Line.findOne({
            specialty: doctor.specialty
        });
    }

    return line;
}

module.exports = filterRegister;