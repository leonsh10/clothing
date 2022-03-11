import Joi from "joi";

const productsSchema = {
  validateProductId: {
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
  validateRemove: {
    params: Joi.object({
      id: Joi.string()
        .regex(/^[0-9a-fA-F]{24}$/)
        .required(),
      filename: Joi.string().required(),
    }),
  },
  post: {
    body: Joi.object({
      name: Joi.string().required(),
      sizes: Joi.string().required(),
      price: Joi.number().required(),
      brand: Joi.string().required(),
      description: Joi.string().required(),
      color: Joi.string().required(),
      specification: Joi.string().required(),
      userId: Joi.string(),
    }),
  },
  put: {
    // params: Joi.object({

    // }),
    body: Joi.object({
      _id: Joi.string()
        .regex(/^[0-9a-fA-F]{24}$/)
        .required(),
      name: Joi.string().required(),
      sizes: Joi.string().required(),
      price: Joi.number().required(),
      brand: Joi.string().required(),
      description: Joi.string().required(),
      color: Joi.string().required(),
      specification: Joi.string().required(),
    }),
  },
};
// const productsSchema = Joi.object({
//   // _id: Joi.string().required(),
//   // name: Joi.string().required(),
//   // sizes: Joi.string().required(),
//   // price: Joi.number().required(),
//   // files: Joi.any(),
// });

export default productsSchema;
