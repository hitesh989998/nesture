import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(
  `${import.meta.env.VITE_STRIPE_KEY_PUBLISHABLE}`
);

const StripePaymentPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 relative -top-20 left-16">
      <header className="text-[#009b7e]">
        <h1 className="text-3xl font-bold">Payment Gateway</h1>
      </header>

      <main className="w-full max-w-md bg-white shadow-md rounded-lg p-8 mt-10">
        <h2 className="text-xl font-bold text-center mb-4">
          Complete Your Payment
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Enter your details to securely process your payment.
        </p>

        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
        <img
          src="https://customcanineunlimited.com/wp-content/uploads/2022/10/Stripe-Logo-1.png"
          alt="Stripe Logo"
          className="mx-auto mt-6 w-32"
        />
      </main>
    </div>
  );
};

export default StripePaymentPage;
