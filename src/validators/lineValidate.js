const { body, param } = require('express-validator');

const validateObject = {
    REGISTER: [
                body(['name','species','breed','specialty']).isString().notEmpty(),
                body(['urgency']).isBoolean().notEmpty()
            ],
    NEXTREATMENT: [param().isInt().notEmpty()],
    ATTEND: [body(['id']).isNumeric().notEmpty()],
    DELETE: [body(['id']).isNumeric().notEmpty()]
}

module.exports = validateObject;