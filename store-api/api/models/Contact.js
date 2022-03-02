import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
  name: String,
  phone: Number,
  message: String,
  email: String,
  subject: String,
});

const Contact = mongoose.model("Contact", ContactSchema);

export default Contact;
