const Doctor = require('../../schemas/doctor');
const mongoose = require('mongoose');

const updateDoctorRegister = async function (id, name, specialty) {

    const data = await Doctor.findByIdAndUpdate({ _id: id }, {
        "name": name,
        "specialty": specialty
    })

    return data;
}

module.exports = updateDoctorRegister;