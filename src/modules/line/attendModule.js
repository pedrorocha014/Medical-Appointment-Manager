const dataAccess = require('../../modules/dataAccessModule');

const attendLine = function(id){
    const appointmentData = dataAccess.getDataFromFile("appointmentDb.json");

    //atualizando o status da consulta em appointmentDb.json
    appointmentData.forEach((element, index) => {
        if(element.id == id){
            const lineChangedStatus = element;
            lineChangedStatus.status = "ATENDIDO";

            appointmentData[index] = lineChangedStatus;

            dataAccess.updateDataFile("appointmentDb.json", appointmentData);
        }
    });

    //retirando o animal atendido da fila, lineDb.json
    const lineData = dataAccess.getDataFromFile("lineDb.json");
    const newLine = lineData.filter(element => element.id != id);

    dataAccess.updateDataFile("lineDb.json", newLine);

    return lineData;
}

module.exports = attendLine;