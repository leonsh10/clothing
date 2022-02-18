// import mongoose from "mongoose";

// const schema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   sizes: {
//     type: String,
//     required: true,
//   },
//   price: {
//     type: Number,
//     required: true,
//   },
//   photo: {
//     type: String,
//     required: true,
//   },
// });

// // const model = mongoose.model("products", schema);

// module.exports = mongoose.model("Products", schema);

// export default productsModel;

import mongoose from "mongoose";

const schema = mongoose.Schema({
  name: String,
  sizes: String,
  price: Number,
  photo: String,
});

const model = mongoose.model("products", schema);

export default model;
