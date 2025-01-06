import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const AdminAddProduct = () => {
  // State for Adding Products
  const [addProductData, setAddProductData] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    image: '',
  });

  // State for Updating Products
  const [updateProductData, setUpdateProductData] = useState({
    id: '',
    name: '',
    description: '',
    price: '',
    category: '',
    image: '',
  });

  // State for Viewing Products
  const [products, setProducts] = useState([]);

  // Fetch all products
  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_WEB_URL}/api/allproducts`
      );
      setProducts(response.data);
    } catch (error) {
      toast.error('Failed to fetch products');
      throw error;
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Handlers for Add Product
  const addProductHandler = (e) => {
    const { name, value } = e.target;
    setAddProductData((prev) => ({ ...prev, [name]: value }));
  };

  const addProductSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/products', addProductData);
      toast.success('Product added successfully');
      setAddProductData({
        name: '',
        description: '',
        price: '',
        category: '',
        image: '',
      });
      fetchProducts(); // Refresh the product list
    } catch (error) {
      toast.error('Failed to add product');
      throw error;
    }
  };

  // Handlers for Update Product
  const updateProductHandler = (e) => {
    const { name, value } = e.target;
    setUpdateProductData((prev) => ({ ...prev, [name]: value }));
  };

  const updateProductSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `/api/products/${updateProductData.id}`,
        updateProductData
      );
      toast.success('Product updated successfully');
      setUpdateProductData({
        id: '',
        name: '',
        description: '',
        price: '',
        category: '',
        image: '',
      });
      fetchProducts(); // Refresh the product list
    } catch (error) {
      toast.error('Failed to update product');
      throw error;
    }
  };

  return (
    <div className="top-28 relative mb-24 bg-white min-h-screen flex flex-col items-center gap-8">
      <h1 className="text-3xl font-semibold text-[#009b7e]">Manage Products</h1>
      <section className="flex gap-3 w-2/3">
        {/* Add Product Section */}
        <div className="w-2/3 max-w-2xl p-10 bg-white shadow-lg rounded-3xl">
          <h1 className="text-2xl font-semibold text-center text-gray-700 mb-6">
            Add Product
          </h1>
          <form onSubmit={addProductSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Product Name"
              value={addProductData.name}
              onChange={addProductHandler}
              className="w-full border rounded-md px-3 py-2"
            />
            <input
              type="text"
              name="description"
              placeholder="Product Description"
              value={addProductData.description}
              onChange={addProductHandler}
              className="w-full border rounded-md px-3 py-2"
            />
            <input
              type="number"
              name="price"
              placeholder="Price"
              value={addProductData.price}
              onChange={addProductHandler}
              className="w-full border rounded-md px-3 py-2"
            />
            <select
              name="category"
              value={addProductData.category}
              onChange={addProductHandler}
              className="w-full border rounded-md px-3 py-2"
            >
              <option value="">Select Category</option>
              <option value="Sustainable Clothing">Sustainable Clothing</option>
              <option value="Eco-Friendly Accessories">
                Eco-Friendly Accessories
              </option>
              <option value="Organic Skincare">Organic Skincare</option>
              <option value="Reusable Home Essentials">
                Reusable Home Essentials
              </option>
              <option value="Eco-Activewear">Eco-Activewear</option>
              <option value="Handcrafted Decor">Handcrafted Decor</option>
              <option value="Natural Wellness Products">
                Natural Wellness Products
              </option>
            </select>
            <input
              type="text"
              name="image"
              placeholder="Image URL"
              value={addProductData.image}
              onChange={addProductHandler}
              className="w-full border rounded-md px-3 py-2"
            />
            <button
              type="submit"
              className="bg-[#009b7e] text-white px-6 py-2 mt-14 rounded-lg shadow-md hover:bg-[#007a65]"
            >
              Add Product
            </button>
          </form>
        </div>

        {/* Update Product Section */}
        <div className="w-2/3 max-w-2xl p-10 bg-white shadow-lg rounded-3xl">
          <h1 className="text-2xl font-semibold text-center text-gray-700 mb-6">
            Update Product
          </h1>
          <form onSubmit={updateProductSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="id"
              placeholder="Product ID"
              value={updateProductData.id}
              onChange={updateProductHandler}
              className="w-full border rounded-md px-3 py-2"
            />
            <input
              type="text"
              name="name"
              placeholder="Product Name"
              value={updateProductData.name}
              onChange={updateProductHandler}
              className="w-full border rounded-md px-3 py-2"
            />
            <input
              type="text"
              name="description"
              placeholder="Product Description"
              value={updateProductData.description}
              onChange={updateProductHandler}
              className="w-full border rounded-md px-3 py-2"
            />
            <input
              type="number"
              name="price"
              placeholder="Price"
              value={updateProductData.price}
              onChange={updateProductHandler}
              className="w-full border rounded-md px-3 py-2"
            />
            <select
              name="category"
              value={updateProductData.category}
              onChange={updateProductHandler}
              className="w-full border rounded-md px-3 py-2"
            >
              <option value="">Select Category</option>
              <option value="Sustainable Clothing">Sustainable Clothing</option>
              <option value="Eco-Friendly Accessories">
                Eco-Friendly Accessories
              </option>
              <option value="Organic Skincare">Organic Skincare</option>
              <option value="Reusable Home Essentials">
                Reusable Home Essentials
              </option>
              <option value="Eco-Activewear">Eco-Activewear</option>
              <option value="Handcrafted Decor">Handcrafted Decor</option>
              <option value="Natural Wellness Products">
                Natural Wellness Products
              </option>
            </select>
            <input
              type="text"
              name="image"
              placeholder="Image URL"
              value={updateProductData.image}
              onChange={updateProductHandler}
              className="w-full border rounded-md px-3 py-2"
            />
            <button
              type="submit"
              className="bg-[#009b7e] text-white px-6 py-2 rounded-lg shadow-md hover:bg-[#007a65]"
            >
              Update Product
            </button>
          </form>
        </div>
      </section>

      {/* View All Products Section */}
      <div className="w-2/3 max-w-2xl p-6 bg-white shadow-lg rounded-3xl">
        <h1 className="text-2xl font-semibold text-center text-gray-700 mb-4">
          All Products
        </h1>
        <div className="h-64 overflow-y-scroll">
          {products.length ? (
            products.map((product) => (
              <div
                key={product.id}
                className="border-b border-gray-200 py-4 flex justify-between items-center"
              >
                <div>
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-sm text-gray-500">{product.description}</p>
                </div>
                <span className="text-sm text-gray-700">${product.price}</span>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No products found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminAddProduct;
