import { useEffect } from 'react';
import { fetchProducts } from './components/Redux/NavProdSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, useLocation } from 'react-router';
import Homepage from './components/Webpages/Homepage';
import AboutUs from './components/Webpages/AboutUs';
import ContactUs from './components/Webpages/ContactUs';
import CategoryPage from './components/Products/CategoryPage';
import ProductDetailPage from './components/Products/ProductDetailPage';
import PrivacyPolicy from './components/Webpages/PrivacyPolicy';
import TermsOfUse from './components/Webpages/TermsOfUse';
import AllProductsPage from './components/Products/AllProductsPage';
import UserDashboard from './components/LoggedInUserPages/UserDashboard';
import AdminDashboard from './components/LoggedInUserPages/AdminDashboard';
import AdminManageUsers from './components/LoggedInUserPages/AdminManageUsers';
import AdminManageProducts from './components/LoggedInUserPages/AdminManageProducts';
import AdminOrders from './components/LoggedInUserPages/AdminOrders';
import AdminLayout from './components/Layouts/AdminLayout';

import PublicLayout from './components/Layouts/PublicLayout';
import CartPage from './components/Cart/CartPage';
import CreateAccount from './components/LoggedInUserPages/CreateAccount';
import UserLayout from './components/Layouts/UserLayout';
import StripePaymentPage from './components/Functionality/StripePaymentPage';
import PaymentSuccess from './components/Functionality/PaymentSuccess';
import { Link } from 'react-router-dom';

const App = () => {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  const userLoginStatus = useSelector((state) => state.auth.user);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  let location = useLocation();

  return (
    <>
      {isAuthenticated === 'authenticated' &&
        userLoginStatus.role === 'administrator' &&
        !location.pathname.startsWith('/admin/') && (
          <div className="flex justify-center items-center bg-white bg-opacity-20 backdrop-blur-sm  text-[#009b7e] fixed top-20 w-full z-10 p-3 ">
            <h2 className="text-sm left-20 relative">
              Welcome administrator! To visit your dashboard click{' '}
              <Link to="/admin/dashboard" className="underline text-white">
                here
              </Link>
            </h2>
          </div>
        )}

      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="about-us" element={<AboutUs />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="sitemap.xml" />
          <Route path="terms-of-use" element={<TermsOfUse />} />
          <Route path="category/:prds" element={<CategoryPage />} />
          <Route path="all-products" element={<AllProductsPage />} />
          <Route path="category/:prds/:id" element={<ProductDetailPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="create-account" element={<CreateAccount />} />
          <Route path="payment" element={<StripePaymentPage />} />

          <Route path="payment-success" element={<PaymentSuccess />} />
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="manage-users" element={<AdminManageUsers />} />
          <Route path="manage-products" element={<AdminManageProducts />} />
          <Route path="orders" element={<AdminOrders />} />
        </Route>

        <Route path="/user" element={<UserLayout />}>
          <Route path="dashboard" element={<UserDashboard />} />
        </Route>

        <Route path="*" element={<>This is 404</>} />
      </Routes>
    </>
  );
};

export default App;
