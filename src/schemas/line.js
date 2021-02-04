const mongoose = require('mongoose');

const lineSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    species: String,
    breed: String,
    urgency: Boolean,
    specialty: String,
    status: String
});

module.exports = mongoose.model('Line', lineSchema);