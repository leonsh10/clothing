import mongoose from "mongoose";

const schema = mongoose.Schema(
  {
    name: String,
    sizes: String,
    price: Number,
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

const model = mongoose.model("products", schema);

export default model;
