import Joi from 'joi';

export const gameSchema = Joi.object({
    name: Joi.string().required(),
    image: Joi.string().required(),
    description: Joi.string().required(),
    categories: Joi.array().min(1).max(3).required(),
    price: Joi.number().required(),
    havePromotion: Joi.boolean().required(),
    promotion: Joi.number().required()
})