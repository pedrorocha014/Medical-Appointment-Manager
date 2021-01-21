const mongoose = require('mongoose');

const appointmentSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    species: String,
    breed: String,
    urgency: Boolean,
    specialty: String,
    status: String
});

module.exports = mongoose.model('Appointment', appointmentSchema);