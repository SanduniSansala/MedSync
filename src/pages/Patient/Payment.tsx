import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Payment: React.FC = () => {
  const [paymentMethod, setPaymentMethod] = useState<string>('');

  const handlePaymentMethodChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    alert(`Payment method selected: ${paymentMethod}`);
    // Add your payment processing logic here
  };

  return (
    <div>
      <Header />
      <div className="max-w-2xl mx-auto mt-10 px-6 py-8 bg-white shadow-md rounded-md">
        <h2 className="text-3xl font-bold text-center mb-4">Payment</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex items-center">
            <input
              type="radio"
              id="card"
              name="paymentMethod"
              value="Card"
              checked={paymentMethod === 'Card'}
              onChange={handlePaymentMethodChange}
              className="mr-2"
            />
            <label htmlFor="card" className="text-gray-700">Card</label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="cash"
              name="paymentMethod"
              value="Cash"
              checked={paymentMethod === 'Cash'}
              onChange={handlePaymentMethodChange}
              className="mr-2"
            />
            <label htmlFor="cash" className="text-gray-700">Cash</label>
          </div>
          <button
            type="submit"
            className="w-full bg-teal-600 text-white font-semibold py-2 rounded hover:bg-teal-700 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Payment;
