// import Joi from "joi";

// const aboutSchema = Joi.object({
//     id: Joi.string().required(),
//     name: Joi.string(),
//     description: Joi.string(),
// })

// export default aboutSchema;

import Joi from "joi";

const aboutSchema = {
  validateAboutId: {
    params: Joi.object({
      aboutId: Joi.string()
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
      title: Joi.string().required(),
      description: Joi.string().required(),
    }),
  },
  put: {
    // params: Joi.object({

    // }),
    body: Joi.object({
      _id: Joi.string()
        .regex(/^[0-9a-fA-F]{24}$/)
        .required(),
      title: Joi.string().required(),
      description: Joi.string().required(),
    }),
  },
};

export default aboutSchema;
