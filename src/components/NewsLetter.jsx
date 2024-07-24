import { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the email submission to your server
    setMessage(`Thank you for subscribing with ${email}`);
    setEmail('');
  };

  return (
    <div className="max-w-md mx-auto mb-10 p-4 border border-gray-300 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center mb-4">Sign up for our newsletter</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 mb-2">Email Address:</label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300">Subscribe</button>
      </form>
      {message && <p className="mt-4 text-green-500 text-center">{message}</p>}
    </div>
  );
};

export default Newsletter;
