import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import { FaHome, FaShoppingCart, FaUser, FaUndo } from 'react-icons/fa';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
} from 'recharts';
import { LogoutUser } from '../Redux/AuthenticationSlice';

const UserDashboard = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated !== 'authenticated') {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  const userLoginStatus = useSelector((state) => state.auth.user);

  let Dispatch = useDispatch();

  let handleLogout = () => {
    Dispatch(LogoutUser());
    navigate('/');
  };

  const salesData = [
    { category: 'Sustainable Clothing', sales: 4000 },
    { category: 'Eco-Friendly Accessories', sales: 2000 },
    { category: 'Organic Skincare', sales: 1500 },
    { category: 'Reusable Essentials', sales: 1000 },
    { category: 'Eco-Activewear', sales: 500 },
    { category: 'Handcrafted Decor', sales: 700 },
    { category: 'Natural Wellness', sales: 300 },
  ];

  const ordersData = [
    { month: 'Jan', orders: 120 },
    { month: 'Feb', orders: 140 },
    { month: 'Mar', orders: 180 },
    { month: 'Apr', orders: 90 },
    { month: 'May', orders: 200 },
    { month: 'Jun', orders: 160 },
  ];

  const returnReasons = [
    { reason: 'Damaged', value: 35 },
    { reason: 'Size Issue', value: 25 },
    { reason: 'Not as Described', value: 20 },
    { reason: 'Other', value: 20 },
  ];

  const productRatings = [
    { product: 'Sustainable Clothing', rating: 4.5 },
    { product: 'Eco-Friendly Accessories', rating: 4.0 },
    { product: 'Organic Skincare', rating: 3.5 },
    { product: 'Reusable Essentials', rating: 4.7 },
    { product: 'Eco-Activewear', rating: 3.9 },
    { product: 'Handcrafted Decor', rating: 4.2 },
    { product: 'Natural Wellness', rating: 4.8 },
  ];

  const COLORS = ['#009b7e', '#FF7043', '#FFD700', '#5A5F6A'];

  return (
    <div className="bg-[url('/newgreen.jpeg')] bg-cover bg-center bg-fixed flex justify-center items-center min-h-screen relative top-24 p-5 mb-24">
      <section className="w-11/12 h-full bg-white/10 p-8 rounded-3xl backdrop-blur-sm shadow-lg">
        <div className="grid grid-cols-4 gap-6">
          <aside className="col-span-1 bg-white p-6 rounded-lg shadow-md relative">
            <div>
              <ul className="space-y-4">
                {[
                  { icon: <FaHome className="text-xl" />, label: 'Dashboard' },
                  { icon: <FaUser className="text-xl" />, label: 'Profile' },
                  {
                    icon: <FaShoppingCart className="text-xl" />,
                    label: 'Orders',
                  },
                  { icon: <FaUndo className="text-xl" />, label: 'Returns' },
                ].map(({ icon, label }, index) => (
                  <li
                    key={index}
                    className="flex items-center text-lg font-medium text-gray-600 hover:text-[#009b7e] cursor-pointer"
                  >
                    <span className="mr-4 text-2xl">{icon}</span>
                    {label}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center absolute bottom-1 w-full left-0">
              <button
                className="bg-red-500 text-white tracking-wide px-28 py-3 rounded-2xl relative hover:bg-red-600 hover:text-white bottom-2"
                onClick={handleLogout}
              >
                Log Out
              </button>
            </div>
          </aside>

          <main className="col-span-3 space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-600">
                Welcome back, {userLoginStatus.username}!
              </h2>
              <h3 className="text-lg font-medium text-gray-500 flex items-center gap-1">
                Your
                <img
                  src="/nesture-tr-main.png"
                  alt="logo"
                  className="h-8 w-20"
                />
                journey so far: <span className="text-[#009b7e]">₹15,400</span>
              </h3>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {[
                {
                  title: 'Total Savings',
                  value: '₹15,400',
                  subtitle: 'Saved across 10 orders',
                },
                {
                  title: 'Orders Placed',
                  value: '45',
                  subtitle: 'Delivered, Pending, and Canceled',
                },
                {
                  title: 'Categories Purchased',
                  value: '6',
                  subtitle: 'Out of 7 total categories',
                },
              ].map(({ title, value, subtitle }, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-semibold text-gray-600">
                    {title}
                  </h3>
                  <p className="text-3xl font-bold text-[#009b7e]">{value}</p>
                  <p className="text-sm text-gray-500">{subtitle}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-600 mb-4">
                  Sales by Category
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={salesData}>
                    <XAxis dataKey="category" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="sales" fill="#009b7e" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-600 mb-4">
                  Monthly Orders
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={ordersData}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="orders" stroke="#FF7043" />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-600 mb-4">
                  Reasons for Returns
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={returnReasons}
                      dataKey="value"
                      nameKey="reason"
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                    >
                      {returnReasons.map((_, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-600 mb-4">
                  Product Ratings
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={productRatings}>
                    <XAxis dataKey="product" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Bar dataKey="rating" fill="#FFD700" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
};

export default UserDashboard;
