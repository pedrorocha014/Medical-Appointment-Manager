const dataAccess = require('../../modules/dataAccessModule');

const filterValidator = function(id){
    const lineData = dataAccess.getDataFromFile("doctorDb.json");
    let result = { "isValidate": true, "message": "Success!" };

    if (!found(lineData, id)) {
        result.isValidate = false;
        result.message = "Error: Line id "+id+" not found.";
    }

    return result;
}

let found = function(data, id){
    const dataToFilter = data.find(element => element.id == id);
    if(dataToFilter != null) { return true; } else { return false; }
}

module.exports = filterValidator;