import productsSchema from "../validators/productsSchema";
import ProductsModel from "../models/ProductsModel";
import express from "express";
const asyncHandler = require("../middlewares/asyncHandler");
const { ApiError } = require("../utils/classes");
const { statusCodes } = require("../config");
import FileService from "../services/FileService";

export default {
  list: asyncHandler(async (req, res, next) => {
    const list = await ProductsModel.find({ isDeleted: false });

    if (!list) {
      next(new ApiError("Cannot list products!", statusCodes.BAD_REQUEST));
      return;
    }

    return res.json(list);
  }),
  get: asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const foundItem = await ProductsModel.findOne({ _id: id });

    if (!foundItem) {
      next(new ApiError("Cannot find product!", statusCodes.BAD_REQUEST));
      return;
    }

    return res.json(foundItem);
  }),
  post: asyncHandler(async (req, res, next) => {
    const product = await ProductsModel.create(req.body);
    if (!product) {
      next(new ApiError("Cannot create product!", statusCodes.BAD_REQUEST));
      return;
    }

    return res.json(product);
  }),
  put: asyncHandler(async (req, res, next) => {
    const product = req.body;

    const updatedProduct = await ProductsModel.findOneAndUpdate(
      { _id: product._id },
      product,
      { new: true }
    );
    if (!updatedProduct) {
      next(new ApiError("Failed to update product!", statusCodes.BAD_REQUEST));
      return;
    }
    return res.json(updatedProduct);
  }),
  delete: asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const foundItem = await ProductsModel.findOne({
      _id: id,
      isDeleted: false,
    });

    if (!foundItem) {
      next(new ApiError("Product not found with id!", statusCodes.NOT_FOUND));
      return;
    }

    const deletedProduct = await ProductsModel.findOneAndUpdate(
      { _id: foundItem._id },
      {
        $set: {
          isDeleted: true,
        },
      },
      { new: true }
    );
    if (!deletedProduct) {
      next(
        new ApiError("Failed to delete product!", statusCodes.INTERNAL_ERROR)
      );
      return;
    }

    return res.json(deletedProduct);
  }),
  uploadFile: asyncHandler(async (req, res, next) => {
    const { id } = req.params;

    const receivedFiles = [req.files.file];

    try {
      const files = await FileService.uploadFiles(receivedFiles);

      const products = await ProductsModel.find({ _id: id }, { files: 1 });
      const oldFiles = products.files;

      const newFiles = `${oldFiles || ""}${oldFiles ? ";" : ""}${files}`;

      await ProductsModel.updateOne({ _id: id }, [
        {
          $set: { files: newFiles },
        },
      ]);

      const updatedProducts = await ProductsModel.find({ _id: id });
      return res.json(updatedProducts);
    } catch (err) {
      // res.status(500).json({ err: err.toString() });
      next(new ApiError("Failed to upload file!", statusCodes.INTERNAL_ERROR));
      return;
    }
  }),
  deleteFile: asyncHandler(async (req, res) => {
    const { productId, filename } = req.params;

    FileService.deleteFiles([filename]);

    const productData = await ProductsModel.findOne(
      { _id: productId },
      { files: 1 }
    );

    const updatedFilenames = productData.files
      .replace(`${filename};`, "")
      .replace(filename, "");

    await ProductsModel.updateOne(
      { _id: productId },
      {
        files: updatedFilenames,
      }
    );

    const updatedProduct = await ProductsModel.findOne(
      { _id: productId },
      {
        files: updatedFilenames,
      }
    );

    return res.json(updatedProduct);
  }),
};
