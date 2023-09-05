import Joi from "joi";

export const paySchema = Joi.object({
    cardName:Joi.string().required(),
    cardNumber:Joi.string().min(16).max(19).required(),
    securityNumber:Joi.number().required(),
    expirationDate:Joi.string().required()
})