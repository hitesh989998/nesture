const productSchema = require('../model/productSchema');

const addProductFunc = async (req, res) => {
  const { category, name, description, image_url, price, discount } = req.body;

  //   const existingProduct = await productSchema.findOne({ id });
  //   if (existingProduct) {
  //     return res.status(400).json({ message: 'Product already exists' });
  //   }

  const documentCount = await productSchema.countDocuments();
  const newid = documentCount + 1;

  const product = new productSchema({
    id: newid,
    category,
    name,
    description,
    image_url,
    price,
    discount,
  });

  await product.save();

  res.status(201).json({ message: 'Product added successfully' });
};

module.exports = addProductFunc;
