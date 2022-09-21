import Joi from 'joi';

const carValidator = Joi.object({
    model: Joi.string().regex(/^[a-zA-ZА-Яа-яА-Яа-яГЇіЄэЭєъЫы]{1,20}$/).required().messages({
        'string.pattern.base': 'Only letters, min: 1, max: 20'
    }),
    price: Joi.number().min(0).max(1000000).required().messages({
        'string.pattern.base': 'Min: 0, max: 1 000 000'
    }),
    year: Joi.number().min(1990).max(new Date().getFullYear()).required().messages({
        'string.pattern.base': 'Min: 1990, max: 2022'
    })
})

export {
    carValidator
}