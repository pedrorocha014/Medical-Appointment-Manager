const dataAccess = require('../../modules/dataAccessModule');

const deleteLineRegister = function(id){
    //atualizando o status da consulta
    const appointmentData = dataAccess.getDataFromFile("appointmentDb.json");

    appointmentData.forEach((element, index) => {
        if(element.id == id){
            const lineChangedStatus = element;
            lineChangedStatus.status = "CANCELADO";

            appointmentData[index] = lineChangedStatus;

            dataAccess.updateDataFile("appointmentDb.json", appointmentData);
        }
    });

    //retirando o animal da fila
    const lineData = dataAccess.getDataFromFile("lineDb.json");
    const newLine = lineData.filter(element => element.id != id);

    dataAccess.updateDataFile("lineDb.json", newLine);

    return newLine;
}

module.exports = deleteLineRegister;