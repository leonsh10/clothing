import mongoose from "mongoose";

const schema = mongoose.Schema(
  {
    name: String,
    sizes: String,
    price: Number,
    files: String,
  },
  { typeKey: "$type" }
);

const model = mongoose.model("products", schema);

export default model;
