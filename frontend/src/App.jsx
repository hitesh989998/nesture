import Navbar from './components/Functionality/Navbar';
import Footer from './components/Functionality/footer';
import { ToastContainer } from 'react-toastify';
import { useEffect } from 'react';
import { fetchProducts } from './components/Redux/NavProdSlice';
import { useDispatch } from 'react-redux';

const App = () => {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <Footer />
      <ToastContainer position="bottom-right" />
    </>
  );
};

export default App;
