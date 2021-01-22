const Line = require('../../schemas/line');
const Appointment = require('../../schemas/appointment');
const mongoose = require('mongoose');

const attendLine = async function(id){
    //atualizando o status da consulta
    const appointmentCanceled = await Appointment.findByIdAndUpdate({_id: id}, {status: "ATENDIDO"});

    //retirando o animal da fila
    const lineDeleted = await Line.deleteOne({ _id: id });

    return {"Line": lineDeleted, "Appointment": appointmentCanceled};
}

module.exports = attendLine;