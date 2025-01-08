import { useState, useEffect } from 'react';
import { FaBoxOpen } from 'react-icons/fa'; // You can use this icon for no orders
import { toast } from 'react-toastify';

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    // Simulating fetching orders data
    try {
      // Example of fetching orders
      // Replace with your actual API call
      const response = await fetch('/api/orders');
      const data = await response.json();
      setOrders(data);
    } catch (error) {
      toast.error('Failed to fetch orders');
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="relative bg-white min-h-screen flex flex-col items-center gap-12 px-6 py-8">
      <h1 className="text-4xl font-bold text-[#009b7e]">Manage Orders</h1>

      <section className="flex justify-center items-center gap-4 mb-8">
        <img src="/razorpay-logo.png" alt="Razorpay" className="h-20" />
      </section>

      <section className="w-full max-w-5xl">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
          All Orders
        </h2>
        <div className="w-full flex justify-center items-center">
          {orders.length === 0 ? (
            <div className="flex flex-col items-center">
              <FaBoxOpen className="text-5xl text-gray-400 mb-4" />
              <p className="text-lg text-gray-600">No orders to display</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {orders.map((order) => (
                <div
                  key={order.id}
                  className="relative flex flex-col bg-white shadow-md rounded-lg p-4"
                >
                  <div className="flex flex-col items-start">
                    <h3 className="font-bold text-lg mb-2">
                      Order #{order.id}
                    </h3>
                    <p className="text-gray-600 text-sm mb-2">
                      {order.items.map((item) => item.name).join(', ')}
                    </p>
                    <p className="text-[#009b7e] font-semibold mb-2">
                      ₹{order.totalAmount}
                    </p>
                    <p className="text-sm text-gray-500 mb-2">
                      Status: {order.status}
                    </p>
                  </div>
                  <div className="absolute bottom-4 right-4 flex flex-row gap-2">
                    <button className="bg-[#009b7e] text-white w-9 h-9 rounded-full flex items-center justify-center shadow-lg hover:bg-[#007b63]">
                      View
                    </button>
                    <button className="bg-red-600 text-white w-9 h-9 rounded-full flex items-center justify-center shadow-lg hover:bg-red-700">
                      Cancel
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default AdminOrders;
