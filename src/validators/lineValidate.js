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
                param().exists().isHexadecimal()
            ]
        }
        case 'attend':{
            return [
                body(['id']).exists().isHexadecimal()
            ]
        }
        case 'delete':{
            return [
                body(['id']).exists().isHexadecimal()
            ]
        }
    }
}

module.exports = validate;