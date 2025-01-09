import { useSelector, useDispatch } from 'react-redux';
import { ClearCart } from '../Redux/AddtoCartSlice';
import { useNavigate } from 'react-router-dom';

const PaymentSuccess = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart.items);
  const cartTotalItems = useSelector((state) => state.cart.totalItems);
  const cartTotalPrice = useSelector((state) => state.cart.totalPrice);

  return (
    <div className="min-h-screen bg-[#F6F6F6] flex flex-col justify-center items-center left-20 relative">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <div className="flex flex-col items-center mb-6">
          <h1 className="text-[#009b7e] text-xl font-bold mb-2">
            Payment Successful!
          </h1>
          <p className="text-[#5A5F6A] text-sm mt-3">
            Thank you for your purchase! Your payment has been successfully
            processed.
          </p>
        </div>

        <div className="bg-[#F6F6F6] rounded-lg p-4 mb-6 relative">
          <h2 className="text-[#5A5F6A] text-sm font-semibold mb-3">
            Summary of Your Purchase
          </h2>
          <ul className="text-[#5A5F6A] text-sm">
            <li className="mb-2">
              <span className="font-medium">Items Bought:</span>{' '}
              {cartItems.length}
            </li>
            <li className="mb-2">
              <span className="font-medium">Total Items:</span> {cartTotalItems}
            </li>
            <li>
              <span className="font-medium">Total Price Paid:</span> Rs
              {cartTotalPrice.toFixed(2)}
            </li>
          </ul>
          <img
            src="/stripe-logo.png"
            alt="Stripe Logo"
            className="h-12 absolute -bottom-3 right-0 p-1"
          />
        </div>

        <button
          onClick={() => {
            navigate('/');
            dispatch(ClearCart());
          }}
          className="bg-[#009b7e] hover:bg-[#007a63] text-white font-medium py-2 px-4 rounded-md w-full"
        >
          Return to Homepage
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccess;
