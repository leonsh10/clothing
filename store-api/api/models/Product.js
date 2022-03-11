import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: String,
    sizes: String,
    price: Number,
    brand: String,
    description: String,
    color: String,
    specification: String,
    files: String,
    isDeleted: {
      type: Boolean,
      default: false,
    },
    createdAt: {
      type: Date,
      required: false,
      default: Date.now,
    },
    createdBy: {
      type: String,
      required: false,
      default: null,
    },
    lastEditAt: {
      type: Date,
      required: false,
      default: null,
    },
    lastEditBy: {
      type: String,
      required: false,
      default: null,
    },
  },
  // { typeKey: "$type" },
  {
    versionKey: false,
  }
);

const Product = mongoose.model("Product", ProductSchema);

export default Product;
