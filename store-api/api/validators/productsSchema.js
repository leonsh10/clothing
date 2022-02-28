import Joi from "joi";

const productsSchema = Joi.object({
  _id: Joi.string().required(),
  name: Joi.string().required(),
  sizes: Joi.string().required(),
  price: Joi.number().required(),
  files: Joi.any(),
});

export default productsSchema;
