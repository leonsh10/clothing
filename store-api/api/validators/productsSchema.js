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
  post: {
    body: Joi.object({
      name: Joi.string().required(),
      sizes: Joi.string().required(),
      price: Joi.number().required(),
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
