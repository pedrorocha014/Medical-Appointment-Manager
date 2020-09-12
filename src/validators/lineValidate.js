const { body, param } = require('express-validator');

const validate = function(method){
    switch(method){
        case 'register':{
            return [
                body(['name','species','breed','specialty']).exists().isString(),
                body(['urgency']).exists().isBoolean()
            ]
        }
        case 'nextTreatment':{
            return [
                param().exists().isNumeric()
            ]
        }
        case 'attend':{
            return [
                body(['id']).exists().isNumeric()
            ]
        }
        case 'delete':{
            return [
                body(['id']).exists().isNumeric()
            ]
        }
    }
}

module.exports = validate;