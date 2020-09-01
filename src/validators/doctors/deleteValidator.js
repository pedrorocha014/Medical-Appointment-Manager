const dataAccess = require('../../modules/dataAccessModule');

const deleteValidator = function(id){
    const doctorsData = dataAccess.getDataFromFile("doctorDb.json");
    let result = { "isValidate": true, "message": "Success!" };

    if (!found(doctorsData, id)) {
        result.isValidate = false;
        result.message = "Error: Doctor id "+id+" not found.";
    }

    if (!correctType(id)) {
        result.isValidate = false;
        result.message = "Error: Incorrect type found.";
    }

    return result;
}

let found = function(data, id){
    const dataToDelete = data.find(element => element.id == id);
    if(dataToDelete != null) { return true; } else { return false; }
}

let correctType = function(id){
    if(typeof(id) == "number") { return true; } else { return false; }
}

module.exports = deleteValidator;