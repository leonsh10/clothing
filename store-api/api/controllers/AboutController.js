import AboutModel from "../models/AboutModel";
import aboutSchema from "../validators/aboutSchema";

export default {
  list: async (req, res) => {
    const list = await AboutModel.find();
    return res.json(list);
  },

  get: async (req, res) => {
    const { id } = req.query;
    const foundItem = await AboutModel.find({ _id: id });
    return res.json(foundItem);
  },

  post: async (req, res) => {
    const about = await new AboutModel(req.body);

    about.save();
    return res.json(about);
  },

  put: async (req, res) => {
    const about = req.body;

    const validationResult = aboutSchema.validate(about);

    if (validationResult.error) {
      return res.status(401).json({
        message: "Validation failed",
        error: validationResult.error,
      });
    }

    try {
      await AboutModel.updateOne({ _id: about.id }, about);

      const updatedAbout = await AboutModel.findOne({
        _id: about.id,
      });
      return res.json(updatedAbout);
    } catch (err) {
      return res.status(500).json({ error: err });
    }
  },
};
