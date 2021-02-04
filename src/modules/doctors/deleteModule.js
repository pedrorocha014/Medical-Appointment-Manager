const Doctor = require('../../schemas/doctor');
const mongoose = require('mongoose');

const deleteDoctorRegister = async function (id) {
    const data = await Doctor.deleteOne({ _id: id });
    return data;
}

module.exports = deleteDoctorRegister;