import { useSelector } from 'react-redux';
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

const AdminDashboard = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated !== 'authenticated') {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  const adminUser = useSelector((state) => state.auth.user);

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
    <main>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-600">
          Welcome back, {adminUser.username}!
        </h2>
        <div className="flex items-center mt-2 gap-1">
          <img src="/nesture-tr-main.png" alt="logo" className="h-8 w-20" />
          <p className="text-gray-600 text-lg tracking-tight">admin user</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 my-6">
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
  );
};

export default AdminDashboard;
