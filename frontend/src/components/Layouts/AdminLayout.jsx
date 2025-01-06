import Navbar from '../Functionality/Navbar';
import Footer from '../Functionality/footer';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const AdminLayout = () => {
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

export default AdminLayout;
