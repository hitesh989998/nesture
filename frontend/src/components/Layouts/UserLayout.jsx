import Navbar from '../Functionality/Navbar';
import Footer from '../Functionality/footer';
import { Outlet, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const UserLayout = () => {
  const adminUser = useSelector((state) => state.auth.user);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated !== 'authenticated') {
      if (adminUser?.role !== 'customer') {
        return navigate('/');
      }
    }
  }, [isAuthenticated, adminUser?.role, navigate]);

  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
        <ToastContainer position="bottom-right" />
      </main>
      <Footer />
    </div>
  );
};

export default UserLayout;
