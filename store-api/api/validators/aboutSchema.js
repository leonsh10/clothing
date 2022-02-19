import Joi from "joi";

const aboutSchema = Joi.object({
    id: Joi.string().required(),
    name: Joi.string(),
    description: Joi.string(),
})


export default aboutSchema;