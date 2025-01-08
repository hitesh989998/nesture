const Product = require('../model/productModel');

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500);
    throw error;
  }
};

exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findOne({ id: req.params.id });
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.status(200).json(product);
  } catch (error) {
    res.status(500);
    throw error;
  }
};

exports.createProduct = async (req, res) => {
  try {
    const { name, price, description, category } = req.body;

    const count = await Product.countDocuments();
    let id = count + 1;

    while (await Product.findOne({ id })) {
      id++;
    }

    const image_url = `${process.env.BACKEND_WEB_URL}/public/uploads/productImages/${req.file.filename}`;

    const newProduct = new Product({
      id,
      name,
      price,
      description,
      image_url,
      category,
      quantity: 1,
    });

    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500);
    console.log(error);
    throw error;
  }
};

exports.updateProduct = async (req, res) => {
  const { name, price, description, category } = req.body;
  const newProduct = {
    name,
    price,
    description,
    category,
    quantity: 1,
  };

  if (req.file) {
    newProduct.image_url = `${process.env.BACKEND_WEB_URL}/public/uploads/productImages/${req.file.filename}`;
  }

  try {
    const updatedProduct = await Product.findOneAndUpdate(
      { id: req.params.id },
      { $set: newProduct },
      { new: true }
    );
    if (!updatedProduct)
      return res.status(404).json({ message: 'Product not found' });
    console.log(updatedProduct);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: 'Error updating product' });
    throw error;
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findOneAndDelete({
      id: req.params.id,
    });
    if (!deletedProduct)
      return res.status(404).json({ message: 'Product not found' });
    res.status(200).json({ message: 'Product deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting product' });
    throw error;
  }
};
