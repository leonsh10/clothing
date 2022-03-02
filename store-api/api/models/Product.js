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
  },
  // { typeKey: "$type" },
  {
    versionKey: false,
  }
);

const Product = mongoose.model("Product", ProductSchema);

export default Product;
