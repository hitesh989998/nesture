const Contact = require('../model/contactUsModel');

exports.contactusHandler = async (req, res) => {
  const { name, email, message, phone, subject } = req.body;

  console.log(
    name,
    email,
    message,
    phone,
    subject,
    'we have received this in handler'
  );

  if (!name || !email || !message || !phone || !subject) {
    return res.status(400).json({ error: 'All fields are required!' });
  }

  try {
    const newContact = new Contact({ name, email, message, phone, subject });
    await newContact.save();

    return res
      .status(201)
      .json({ message: 'Contact information saved successfully!' });
  } catch (error) {
    console.error('Error saving contact information:', error); // Log the error for debugging
    return res
      .status(500)
      .json({ error: 'Failed to save contact information.' });
  }
};
