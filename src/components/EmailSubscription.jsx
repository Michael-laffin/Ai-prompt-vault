import React, { useState } from 'react';
import { supabase } from '../lib/supabase';

const EmailSubscription = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email) => {
    // Basic email regex validation
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(''); // Clear previous messages
    setIsLoading(true);

    if (!validateEmail(email)) {
      setMessage('Please enter a valid email address.');
      setIsSuccess(false);
      setIsLoading(false);
      return;
    }

    try {
      const { data, error } = await supabase
        .from('subscribers')
        .insert([{ email }]);

      if (error) {
        // Handle duplicate email error specifically
        if (error.code === '23505') {
          setMessage('This email is already subscribed!');
        } else {
          setMessage('An error occurred. Please try again later.');
        }
        setIsSuccess(false);
      } else {
        setMessage('Subscription successful! Thank you for joining us.');
        setIsSuccess(true);
        setEmail(''); // Clear email field on success
      }
    } catch (error) {
      setMessage('An unexpected error occurred. Please try again.');
      setIsSuccess(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative z-10 w-full py-20 px-4 sm:px-6 lg:px-8 bg-dark-blue-900 text-white flex flex-col items-center justify-center">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-neon-blue mb-6 leading-tight tracking-wide">
          Stay Ahead of the Curve
        </h2>
        <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Unlock exclusive insights, early access to new features, and expert tips directly in your inbox.
        </p>

        <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <label htmlFor="email-input" className="sr-only">Email Address</label>
            <input
              id="email-input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              aria-label="Email Address"
              required
              disabled={isLoading}
              className={`flex-grow w-full sm:w-auto px-6 py-3 rounded-lg border border-neon-purple focus:outline-none focus:ring-2 focus:ring-neon-blue text-white placeholder-gray-400 transition-all duration-300 ease-in-out shadow-lg ${
                isLoading ? 'bg-gray-700 cursor-not-allowed' : 'bg-dark-blue-800'
              }`}
            />
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full sm:w-auto px-8 py-3 rounded-lg text-white font-bold text-lg uppercase tracking-wider shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neon-blue transition-all duration-300 ease-in-out ${
                isLoading
                  ? 'bg-gray-600 cursor-not-allowed'
                  : 'bg-gradient-to-r from-neon-purple to-neon-blue hover:from-neon-blue hover:to-neon-purple'
              }`}
            >
              {isLoading ? 'Subscribing...' : 'Subscribe'}
            </button>
          </div>
          {message && (
            <p className={`mt-4 text-sm ${isSuccess ? 'text-green-400' : 'text-red-400'}`} role="alert">
              {message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default EmailSubscription;