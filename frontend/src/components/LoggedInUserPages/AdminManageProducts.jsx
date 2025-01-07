/* eslint-disable no-undef */
import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { FiEdit, FiTrash } from 'react-icons/fi';

const AdminAddProduct = () => {
  const [addProductData, setAddProductData] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    image: '',
  });

  const [updateProductData, setUpdateProductData] = useState({
    id: '',
    name: '',
    description: '',
    price: '',
    category: '',
    image: '',
  });

  const [products, setProducts] = useState([]);

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

  const addProductHandler = (e) => {
    const { name, value } = e.target;
    setAddProductData((prev) => ({ ...prev, [name]: value }));
  };

  const addProductSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `${import.meta.env.VITE_BACKEND_WEB_URL}/api/products`,
        addProductData
      );
      toast.success('Product added successfully');
      setAddProductData({
        name: '',
        description: '',
        price: '',
        category: '',
        image: '',
      });
      fetchProducts();
    } catch (error) {
      toast.error('Failed to add product');
      throw error;
    }
  };

  const updateProductHandler = (e) => {
    const { name, value } = e.target;
    setUpdateProductData((prev) => ({ ...prev, [name]: value }));
  };

  const updateProductSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `${import.meta.env.VITE_BACKEND_WEB_URL}/api/products/${updateProductData.id}`,
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
      fetchProducts();
    } catch (error) {
      toast.error('Failed to update product');
      throw error;
    }
  };

  const handleEdit = (product) => {
    setUpdateProductData(product);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_BACKEND_WEB_URL}/api/products/${id}`
      );
      toast.success('Product deleted successfully');
      fetchProducts();
    } catch (error) {
      toast.error('Failed to delete product');
      throw error;
    }
  };

  return (
    <div className="relative bg-white min-h-screen flex flex-col items-center gap-12 px-6 py-8">
      <h1 className="text-4xl font-bold text-[#009b7e]">Manage Products</h1>

      <section className="flex flex-col md:flex-row gap-6 w-full max-w-5xl">
        <div className="w-full md:w-1/2 bg-white shadow-lg rounded-xl p-8">
          <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
            Add Product
          </h2>
          <form onSubmit={addProductSubmit} className="flex flex-col gap-5">
            <input
              type="text"
              name="name"
              placeholder="Product Name"
              value={addProductData.name}
              onChange={addProductHandler}
              className="w-full border rounded-lg px-4 py-3"
            />
            <input
              type="text"
              name="description"
              placeholder="Product Description"
              value={addProductData.description}
              onChange={addProductHandler}
              className="w-full border rounded-lg px-4 py-3"
            />
            <input
              type="number"
              name="price"
              placeholder="Price"
              value={addProductData.price}
              onChange={addProductHandler}
              className="w-full border rounded-lg px-4 py-3"
            />
            <select
              name="category"
              value={addProductData.category}
              onChange={addProductHandler}
              className="w-full border rounded-lg px-4 py-3"
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
              className="w-full border rounded-lg px-4 py-3"
            />
            <button
              type="submit"
              className="bg-[#009b7e] text-white font-medium py-2 px-4 rounded-lg hover:bg-[#007b63]"
            >
              Add Product
            </button>
          </form>
        </div>

        <div className="w-full md:w-1/2 bg-white shadow-lg rounded-xl p-8">
          <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
            Update Product
          </h2>
          <form onSubmit={updateProductSubmit} className="flex flex-col gap-5">
            <input
              type="text"
              name="name"
              placeholder="Product Name"
              value={updateProductData.name}
              onChange={updateProductHandler}
              className="w-full border rounded-lg px-4 py-3"
            />
            <input
              type="text"
              name="description"
              placeholder="Product Description"
              value={updateProductData.description}
              onChange={updateProductHandler}
              className="w-full border rounded-lg px-4 py-3"
            />
            <input
              type="number"
              name="price"
              placeholder="Price"
              value={updateProductData.price}
              onChange={updateProductHandler}
              className="w-full border rounded-lg px-4 py-3"
            />
            <select
              name="category"
              value={updateProductData.category}
              onChange={updateProductHandler}
              className="w-full border rounded-lg px-4 py-3"
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
              className="w-full border rounded-lg px-4 py-3"
            />
            <button
              type="submit"
              className="bg-[#009b7e] text-white font-medium py-2 px-4 rounded-lg hover:bg-[#007b63]"
            >
              Update Product
            </button>
          </form>
        </div>
      </section>

      <section className="w-full max-w-5xl">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
          All Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative flex flex-col bg-white shadow-md rounded-lg p-4"
            >
              <img
                src={product.image_url}
                alt={product.name}
                className="h-40 w-full object-cover rounded-md mb-4"
              />
              <div className="flex flex-col items-start">
                <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-2">
                  {product.description}
                </p>
                <p className="text-[#009b7e] font-semibold mb-2">
                  ₹{product.price}
                </p>
              </div>

              <div className="absolute bottom-4 right-4 flex flex-row gap-2">
                <button
                  onClick={() => handleEdit(product)}
                  className="bg-[#009b7e] text-white w-9 h-9 rounded-full flex items-center justify-center shadow-lg hover:bg-[#007b63]"
                >
                  <FiEdit className="text-lg" />
                </button>
                <button
                  onClick={() => handleDelete(product.id)}
                  className="bg-red-600 text-white w-9 h-9 rounded-full flex items-center justify-center shadow-lg hover:bg-red-700"
                >
                  <FiTrash className="text-lg" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AdminAddProduct;
