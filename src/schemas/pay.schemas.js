import Joi from "joi";

export const paySchema = Joi.object({
    cardName:Joi.string().required(),
    cardNumber:Joi.number().required(),
    securityNumber:Joi.number().required(),
    expirationDate:Joi.string().required()
})