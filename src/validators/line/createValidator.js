const dataAccess = require('../../modules/dataAccessModule');

const createValidator = function(name, species, breed, urgency, specialty){
    const lineData = dataAccess.getDataFromFile("lineDb.json");
    let result = { "isValidate": true, "message": "Success!" };

    if (!isUnique(lineData, name, species, breed)) {
        result.isValidate = false;
        result.message = "Error: Duplicate values are not allowed.";
    }

    if (!isEmpty(name, species, breed, urgency, specialty)) {
        result.isValidate = false;
        result.message = "Error: Empty values are not allowed.";
    }

    if (!correctType(name, species, breed, urgency, specialty)) {
        result.isValidate = false;
        result.message = "Error: Incorrect type found.";
    }

    return result;
}

let isUnique = function(data, name, species, breed){
    const repeatedData = data.find(element => element.name == name && 
                                              element.species == species && 
                                              element.breed == breed);
    if(repeatedData == null) { return true; } else { return false; }
}

let isEmpty = function(name, species, breed, urgency, specialty){
    if(name == null|| species == null || breed == null|| urgency == null|| specialty == null) { 
        return false;
    } else { 
        return true;
    }
}

let correctType = function(name, species, breed, urgency, specialty){
    if(typeof(name) == "string" && 
       typeof(species) == "string" && 
       typeof(breed) == "string" && 
       typeof(urgency) == "boolean" && 
       typeof(specialty) == "string") { 
           return true; 
        } else { 
            return false; 
        }
}

module.exports = createValidator;