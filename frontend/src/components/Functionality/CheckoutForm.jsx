import { useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';

const CheckoutForm = () => {
  const [loading, setLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const cartTotalPrice = useSelector((state) => state.cart.totalPrice);
  const userLoginStatus = useSelector((state) => state.auth.user);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Send a request to the backend to create a payment intent
    const { data } = await axios.post(
      `${import.meta.env.VITE_BACKEND_WEB_URL}/api/payment/create-payment-intent`,
      {
        amount: cartTotalPrice,
        currency: 'inr',
      }
    );

    // Confirm the payment on the frontend using the client secret
    const result = await stripe.confirmCardPayment(data.clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement), // Get the card details from Stripe's CardElement
        billing_details: {
          name: `${userLoginStatus.username}`,
        },
      },
    });

    if (result.error) {
      toast.error(result.error.message);
      setLoading(false);
    } else {
      if (result.paymentIntent.status === 'succeeded') {
        toast.success('Payment Successful!');
        setLoading(false);
        navigate('/payment-success');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button
        type="submit"
        disabled={!stripe || loading}
        className="w-full bg-[#009b7e] text-white font-bold py-2 rounded-lg mt-5 hover:bg-[#00765e] hover:text-white"
      >
        {loading ? 'Processing...' : 'Pay'}
      </button>
    </form>
  );
};

export default CheckoutForm;
