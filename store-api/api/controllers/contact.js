import Contact from "../models/Contact";
import contactSchema from "../validators/contact";

export default {
  list: async (req, res) => {
    const list = await Contact.find();
    return res.json(list);
  },

  get: async (req, res) => {
    const { id } = req.query;
    const foundItem = await Contact.find({ _id: id });
    return res.json(foundItem);
  },

  post: async (req, res) => {
    const contact = await new Contact(req.body);
    contact.save();
    return res.json(contact);
  },

  put: async (req, res) => {
    const contact = req.body;

    const validationResult = contactSchema.validate(contact);

    if (validationResult.error) {
      return res.status(401).json({
        message: "Validation failed",
        error: validationResult.error,
      });
    }

    try {
      await Contact.updateOne({ _id: contact.id }, contact);

      const updatedContact = await Contact.findOne({
        _id: contact.id,
      });
      return res.json(updatedContact);
    } catch (err) {
      return res.status(500).json({ error: err });
    }
  },
};
