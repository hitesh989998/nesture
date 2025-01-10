import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import axios from 'axios';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  Tooltip,
  XAxis,
  CartesianGrid,
  YAxis,
  Legend,
} from 'recharts';

const AdminDashboard = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();
  const adminUser = useSelector((state) => state.auth.user);

  const [userStats, setUserStats] = useState([]);
  const [productCategories, setProductCategories] = useState([]);
  const [priceStats, setPriceStats] = useState([]);

  useEffect(() => {
    if (isAuthenticated !== 'authenticated') {
      if (adminUser?.role !== 'administrator') {
        return navigate('/');
      }
    }
  }, [isAuthenticated, adminUser?.role, navigate]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [userResponse, categoryResponse, priceResponse] =
          await Promise.all([
            axios.get(
              `${import.meta.env.VITE_BACKEND_WEB_URL}/api/charts/user-stats`
            ),
            axios.get(
              `${import.meta.env.VITE_BACKEND_WEB_URL}/api/charts/product-categories`
            ),
            axios.get(
              `${import.meta.env.VITE_BACKEND_WEB_URL}/api/charts/price-stats`
            ),
          ]);

        setUserStats(userResponse.data);
        setProductCategories(categoryResponse.data);
        setPriceStats(priceResponse.data);
      } catch (err) {
        throw err;
      }
    };

    fetchData();
  }, []);

  const COLORS = ['#00765e', '#FFF8DE', '#C5D3E8', '#FFC0CB', '#87CEEB'];
  const totalCount = productCategories.reduce(
    (sum, item) => sum + item.count,
    0
  );

  return (
    <main>
      <div className="bg-white p-6 rounded-lg shadow-md">
        {isAuthenticated === 'authenticated' && (
          <h2 className="text-2xl font-bold text-gray-600">
            Welcome back, {adminUser.username}!
          </h2>
        )}
        <div className="flex items-center mt-2 gap-1">
          <img src="/nesture-tr-main.png" alt="logo" className="h-8 w-20" />
          <p className="text-gray-600 text-lg tracking-tight">admin user</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 my-6">
        {userStats.map((stat, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h3 className="text-lg font-semibold text-gray-600">{stat.role}</h3>
            <p className="text-2xl font-bold text-[#00765e]">{stat.count}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-6 mt-6">
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
                {userStats &&
                  userStats.map((_, index) => (
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
            Products by Category
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={productCategories}>
              <XAxis
                dataKey="category"
                tick={{ fontSize: 6, angle: -10 }}
                interval={0}
              />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5 " />
              <YAxis />
              <Tooltip />
              <Legend formatter={() => `Total Products: ${totalCount}`} />
              <Line type="monotone" dataKey="count" stroke="#00765e" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 mt-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-600 mb-4">
            Product Price Ranges
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={priceStats}>
              <XAxis dataKey="range" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="count"
                stackId="1"
                stroke="#00765e"
                fill="#C5D3E8"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-600 mb-4">
            Items Priced Under ₹500
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={priceStats}>
              <XAxis dataKey="range" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#00765e" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </main>
  );
};

export default AdminDashboard;
