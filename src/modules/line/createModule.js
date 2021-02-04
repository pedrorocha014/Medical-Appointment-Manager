const Line = require('../../schemas/line');
const Appointment = require('../../schemas/appointment');
const mongoose = require('mongoose');

const createLineRegister = function(name, species, breed, urgency, specialty){

    const data = {
        "_id": new mongoose.Types.ObjectId(),
        "name": name.toUpperCase(),
        "species": species.toUpperCase(),
        "breed": breed.toUpperCase(),
        "urgency": urgency,
        "specialty": specialty.toUpperCase(),
        "status": "PENDENTE"
    }

    //cadastrando a consulta no banco de consultas
    const appointment = new Appointment(data);
    appointment.save();

    //cadastrando a consulta na fila
    const line = new Line(data);
    line.save();

    return data;
}

module.exports = createLineRegister;