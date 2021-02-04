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