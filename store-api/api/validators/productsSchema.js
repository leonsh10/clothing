import Joi from "joi";

const productsSchema = Joi.object({
  _id: Joi.string().required(),
  name: Joi.string(),
  sizes: Joi.string(),
  price: Joi.number(),
  photo: Joi.any(),
});

export default productsSchema;
