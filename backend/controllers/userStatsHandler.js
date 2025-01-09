const User = require('../model/userModel');
const Product = require('../model/productModel');

exports.getUserStats = async (req, res) => {
  try {
    const userStats = await User.aggregate([
      { $group: { _id: '$role', count: { $sum: 1 } } },
      { $project: { role: '$_id', count: 1, _id: 0 } },
    ]);
    res.json(userStats);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch user stats' });
    throw err;
  }
};

exports.productCategoriesStats = async (req, res) => {
  try {
    const productCategories = await Product.aggregate([
      { $group: { _id: '$category', count: { $sum: 1 } } },
      { $project: { category: '$_id', count: 1, _id: 0 } },
    ]);
    res.json(productCategories);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch product categories' });
    throw err;
  }
};

exports.productPriceStats = async (req, res) => {
  try {
    const priceStats = await Product.aggregate([
      {
        $bucket: {
          groupBy: '$price',
          boundaries: [0, 500, 1000, 2000, 3000, Infinity],
          default: 'Over ₹3,000',
          output: { count: { $sum: 1 } },
        },
      },
      { $project: { range: '$_id', count: 1, _id: 0 } },
    ]);
    res.json(priceStats);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch price stats' });
    throw err;
  }
};
