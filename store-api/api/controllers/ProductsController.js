import productsSchema from "../validators/productsSchema";
import ProductsModel from "../models/ProductsModel";
import express from "express";

export default {
  list: async (req, res) => {
    const list = await ProductsModel.find();

    return res.json(list);
  },
  get: async (req, res) => {
    const { id } = req.params;
    const foundItem = await ProductsModel.findOne({ _id: id });

    return res.json(foundItem);
  },
  post: async (req, res) => {
    const product = new ProductsModel(req.body);

    await product.save();

    return res.json(product);
  },
  put: async (req, res) => {
    const product = req.body;

    const validationResult = productsSchema.validate(product);

    if (validationResult.error) {
      return res.status(401).json({
        message: "Validation failed while updating",
        error: validationResult.error,
      });
    }

    await ProductsModel.updateOne({ _id: product._id }, products);

    const updatedProduct = await ProductsModel.find({
      _id: product._id,
    });

    return res.json(updatedProduct);
  },
};
