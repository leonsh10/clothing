import mongoose from "mongoose";

const schema = mongoose.Schema({
    name: String,
    phone: Number,
    message: String,
    email: String,
    subject: String
});

const model = mongoose.model("contacts", schema);

export default model;