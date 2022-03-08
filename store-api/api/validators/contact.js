import Joi from "joi";

// const contact = Joi.object({
//   id: Joi.string().required(),
//   name: Joi.string(),
//   phone: Joi.number(),
//   message: Joi.string(),
//   email: Joi.string(),
//   subject: Joi.string(),
// });


const contactsSchema = {
  validateContactId: {
    params: Joi.object({
      productId: Joi.string()
        .regex(/^[0-9a-fA-F]{24}$/)
        .required(),
    }),
  },
  validateId: {
    params: Joi.object({
      id: Joi.string()
        .regex(/^[0-9a-fA-F]{24}$/)
        .required(),
    }),
  },
  post: {
    body: Joi.object({
      name: Joi.string().required(),
      message: Joi.string().required(),
      email: Joi.string().required(),
      subject: Joi.string().required(),
    }),
  },
  put: {
    body: Joi.object({
      _id: Joi.string()
        .regex(/^[0-9a-fA-F]{24}$/)
        .required(),
        name: Joi.string().required(),
        message: Joi.string().required(),
        email: Joi.string().required(),
        subject: Joi.string().required(),
    }),
  },
}

export default contactsSchema;
