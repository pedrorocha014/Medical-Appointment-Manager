const dataAccess = require('../../modules/dataAccessModule');

const attendValidator = function(id){
    const lineData = dataAccess.getDataFromFile("lineDb.json");
    let result = { "isValidate": true, "message": "Success!" };

    if (!found(lineData, id)) {
        result.isValidate = false;
        result.message = "Error: Line id "+id+" not found.";
    }

    if (!correctType(id)) {
        result.isValidate = false;
        result.message = "Error: Incorrect type found.";
    }

    return result;
}

let found = function(data, id){
    const dataToFilter = data.find(element => element.id == id);
    if(dataToFilter != null) { return true; } else { return false; }
}

let correctType = function(id){
    if(typeof(id) == "number") { return true; } else { return false; }
}

module.exports = attendValidator;