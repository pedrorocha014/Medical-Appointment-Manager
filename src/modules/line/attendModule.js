const dataAccess = require('../../modules/dataAccessModule');

const attendLine = function(id, status){
    const lineData = dataAccess.getDataFromFile("lineDb.json");

    lineData.forEach((element, index) => {
        if(element.id == id){
            const lineChangedStatus = {
                "id": element.id,
                "name": element.name,
                "species": element.species,
                "breed": element.breed,
                "urgency": element.urgency,
                "specialty": element.specialty,
                "status": status.toUpperCase()
            }

            lineData[index] = lineChangedStatus;

            dataAccess.updateDataFile("lineDb.json", lineData);
        }
    });

    return lineData;
}

module.exports = attendLine;