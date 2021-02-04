const Doctor = require('../../schemas/doctor');
const mongoose = require('mongoose');

const readDoctorRegister = async function () {
   const data =  await Doctor.find();
   return data;
}

module.exports = readDoctorRegister;