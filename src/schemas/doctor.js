const mongoose = require('mongoose');

const doctorSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    specialty: String
});

module.exports = mongoose.model('Doctor', doctorSchema);