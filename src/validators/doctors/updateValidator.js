const dataAccess = require('../../modules/dataAccessModule');

const updateValidator = function(id, name, specialty){
    const doctorsData = dataAccess.getDataFromFile("doctorDb.json");
    let result = { "isValidate": true, "message": "Success!" };

    if (!isEmpty(id, name, specialty)) {
        result.isValidate = false;
        result.message = "Error: Empty values are not allowed.";
    }

    if (!found(doctorsData, id)) {
        result.isValidate = false;
        result.message = "Error: Doctor id "+id+" not found.";
    }

    if (!correctType(id, name, specialty)) {
        result.isValidate = false;
        result.message = "Error: Incorrect type found.";
    }

    return result;
}

let found = function(data, id){
    const dataToUpdate = data.find(element => element.id == id);
    if(dataToUpdate != null) { return true; } else { return false; }
}

let isEmpty = function(id, name, specialty){
    if(id == null || name == null || specialty == null) { return false; } else { return true; }
}

let correctType = function(id, name, specialty){
    if(typeof(id) == "number" && typeof(name) == "string" && typeof(specialty) == "string") { 
        return true; 
    } else { 
        return false; 
    }
}

module.exports = updateValidator;