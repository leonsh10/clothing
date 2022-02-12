import ContactModel from '../models/ContactModel';
import updateContactSchema from '../validators/updateContactSchema';

export default {
    list: async (req, res) => {
        const list = await ContactModel.find();
        return res.json(list);
    },

    get: async (req, res) => {
        const { id } = req.query;
        const foundItem = await ContactModel.find({ _id: id });
        return res.json(foundItem);

    },

    post: async (req, res) => {
        const contact = await new ContactModel(req.body);

        contact.save();
        return res.json(contact);
    },

    put: async (req, res) => {
        const contact = req.body;

        const validationResult = updateContactSchema.validate(contact);

        if (validationResult.error) {
            return res.status(401).json({
                message: "Validation failed",
                error: validationResult.error,
            });
        }

        try{
            await ContactModel.updateOne( {_id: contact.id}, contact);

            const updatedContact = await ContactModel.findOne({
                _id: contact.id,
            });
        return res.json(updatedContact);
        } catch(err){
            return res.status(500).json({ error:err});
        }
    }
}