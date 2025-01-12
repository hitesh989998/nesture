import { FaBoxOpen } from 'react-icons/fa';

const AdminOrders = () => {
  return (
    <div className="relative bg-white min-h-screen flex flex-col items-center gap-12 px-6 py-8">
      <h1 className="text-4xl font-bold text-[#009b7e]">Manage Orders</h1>

      <section className="flex justify-center items-center gap-4 mb-8">
        <img src="/stripe-logo.png" alt="Stripe" className="h-20" />
      </section>

      <section className="w-full max-w-5xl">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
          All Orders
        </h2>
        <div className="w-full flex justify-center items-center">
          <div className="flex flex-col items-center">
            <FaBoxOpen className="text-5xl text-gray-400 mb-4" />
            <p className="text-lg text-gray-600">No orders to display</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminOrders;
