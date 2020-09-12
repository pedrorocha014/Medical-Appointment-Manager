const { body } = require('express-validator');

const validate = function(method){
    switch(method){
        case 'register':{
            return [
                body(['name', 'specialty']).exists().isString()
            ]
        }
        case 'update':{
            return [
                body(['name', 'specialty']).exists().isString(),
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