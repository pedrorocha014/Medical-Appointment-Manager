const { body } = require('express-validator');

const validateObject = {
    REGISTER: [body(['name', 'specialty']).isString().notEmpty()],
    UPDATE: [
                body(['name', 'specialty']).isString().notEmpty(),
                body(['id']).isNumeric().notEmpty()
            ],
    DELETE: [body(['id']).isNumeric().notEmpty()]
}

module.exports = validateObject;