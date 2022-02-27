import mongoose from "mongoose";

const schema = mongoose.Schema({
  title: String,
  description: String,
});

const model = mongoose.model("about", schema);

export default model;
