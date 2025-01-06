import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
} from 'recharts';
import { LogoutUser } from '../Redux/AuthenticationSlice';
import {
  FaUsers,
  FaBox,
  FaClipboardList,
  FaHome,
  FaSignOutAlt,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated !== 'authenticated') {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  const adminUser = useSelector((state) => state.auth.user);

  const Dispatch = useDispatch();

  const handleLogout = () => {
    Dispatch(LogoutUser());
    navigate('/');
  };

  const userStats = [
    { role: 'Customers', count: 220 },
    { role: 'Vendors', count: 30 },
    { role: 'Admins', count: 5 },
  ];

  const productStats = [
    { category: 'In Stock', value: 5200 },
    { category: 'Out of Stock', value: 378 },
    { category: 'New Arrivals', value: 228 },
  ];

  const COLORS = ['#00765e', '#FFF8DE', '#C5D3E8'];

  return (
    <div className="bg-white flex justify-center items-center min-h-screen p-6 top-20 relative mb-24">
      <section className="w-11/12 h-full bg-white p-8 rounded-xl shadow-md">
        <div className="grid grid-cols-4 gap-6 relative">
          <aside className="col-span-1 bg-[#00765e] text-white p-6 rounded-lg shadow-lg relative">
            <section>
              <ul className="space-y-4">
                {[
                  { icon: <FaHome />, label: 'Dashboard' },
                  { icon: <FaUsers />, label: 'Manage Users' },
                  { icon: <FaBox />, label: 'Manage Products' },
                  { icon: <FaClipboardList />, label: 'Orders' },
                ].map(({ icon, label }, index) => (
                  <Link
                    className="block"
                    to={`/admin/${label.toLowerCase().split(' ').join('-')}`}
                  >
                    <li
                      key={index}
                      className="flex items-center text-lg font-medium hover:underline cursor-pointer"
                    >
                      <span className="mr-3 text-xl">{icon}</span>
                      {label}
                    </li>
                  </Link>
                ))}
              </ul>
            </section>

            <section>
              <div className="absolute bottom-0 flex justify-center w-full left-0 p-1 ">
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center justify-center bg-red-600 hover:bg-red-700 py-3 rounded-md text-lg font-medium"
                >
                  <FaSignOutAlt className="mr-3" /> Log Out
                </button>
              </div>
            </section>
          </aside>

          <main className="col-span-3 space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-600">
                Welcome back, {adminUser.username}!
              </h2>
              <div className="flex items-center mt-2 gap-1">
                <img
                  src="/nesture-tr-main.png"
                  alt="logo"
                  className="h-8 w-20"
                />
                <p className="text-gray-600 text-lg tracking-tight">
                  admin user
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {[...userStats, ...productStats].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-lg font-semibold text-gray-600">
                    {stat.role || stat.category}
                  </h3>
                  <p className="text-2xl font-bold text-[#00765e]">
                    {stat.count || stat.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-600 mb-4">
                  User Distribution
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={userStats}
                      dataKey="count"
                      nameKey="role"
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      fill="#00765e"
                    >
                      {userStats.map((_, index) => (
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
                  Product Stock
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={productStats}>
                    <XAxis dataKey="category" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="#00765e" />
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

export default AdminDashboard;
