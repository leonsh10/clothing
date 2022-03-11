import mongoose from "mongoose";

const AboutSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
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
  {
    versionKey: false,
  }
);

const About = mongoose.model("About", AboutSchema);

export default About;
