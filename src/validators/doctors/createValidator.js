const dataAccess = require('../../modules/dataAccessModule');

const createValidator = function(name, specialty){
    const doctorsData = dataAccess.getDataFromFile("doctorDb.json");
    let result = { "isValidate": true, "message": "Success!" };

    if (!isUnique(doctorsData, name)) {
        result.isValidate = false;
        result.message = "Error: Duplicate values are not allowed.";
    }

    if (!isEmpty(name, specialty)) {
        result.isValidate = false;
        result.message = "Error: Empty values are not allowed.";
    }

    if (!correctType(name, specialty)) {
        result.isValidate = false;
        result.message = "Error: Incorrect type found.";
    }

    return result;
}

let isUnique = function(data, name){
    const repeatedData = data.find(element => element.name == name);
    if(repeatedData == null) { return true; } else { return false; }
}

let isEmpty = function(name, specialty){
    if(name == null || specialty == null) { return false; } else { return true; }
}

let correctType = function(name, specialty){
    if(typeof(name) == "string" && typeof(specialty) == "string") { return true; } else { return false; }
}

module.exports = createValidator;