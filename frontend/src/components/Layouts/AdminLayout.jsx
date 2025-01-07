import Navbar from '../Functionality/Navbar';
import Footer from '../Functionality/footer';
import { ToastContainer } from 'react-toastify';
import {
  FaHome,
  FaUsers,
  FaBox,
  FaClipboardList,
  FaSignOutAlt,
} from 'react-icons/fa';
import { Link, useNavigate, Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { LogoutUser } from '../Redux/AuthenticationSlice';

const AdminLayout = () => {
  const navigate = useNavigate();
  const Dispatch = useDispatch();

  const handleLogout = () => {
    Dispatch(LogoutUser());
    navigate('/');
  };

  return (
    <>
      <Navbar />
      <div className="flex relative top-20 p-6 bg-gray-50 h-fit">
        <aside className="w-1/4 bg-[#00765e] text-white p-6 shadow-lg rounded-lg flex flex-col justify-between">
          <ul className="space-y-6">
            {[
              { icon: <FaHome />, label: 'Dashboard' },
              { icon: <FaUsers />, label: 'Manage Users' },
              { icon: <FaBox />, label: 'Manage Products' },
              { icon: <FaClipboardList />, label: 'Orders' },
            ].map(({ icon, label }, index) => (
              <Link
                key={index}
                to={`/admin/${label.toLowerCase().split(' ').join('-')}`}
                className="block"
              >
                <li className="flex items-center text-lg font-medium hover:underline cursor-pointer">
                  <span className="mr-3 text-xl">{icon}</span>
                  {label}
                </li>
              </Link>
            ))}
          </ul>

          <button
            onClick={handleLogout}
            className="mt-auto flex items-center justify-center bg-red-600 hover:bg-red-700 py-3 px-4 rounded-lg text-lg font-medium"
          >
            <FaSignOutAlt className="mr-3" /> Log Out
          </button>
        </aside>

        <main className="w-3/4 bg-gray-100 p-8 shadow rounded-md overflow-hidden h-fit ml-6">
          <div className="bg-white p-6 shadow rounded-md">
            <Outlet />
          </div>
        </main>
      </div>
      <Footer />
      <ToastContainer position="bottom-right" />
    </>
  );
};

export default AdminLayout;
