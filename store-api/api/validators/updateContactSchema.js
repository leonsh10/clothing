import Joi from "joi";

const updateContactSchema = Joi.object({
    id: Joi.string().required(),
    name: Joi.string(),
    phone: Joi.number(),
    message: Joi.string(),
    email: Joi.string(),
    subject: Joi.string(),
})


export default updateContactSchema;