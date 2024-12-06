import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [gdprConsent, setGdprConsent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!gdprConsent) {
      setMessage('Du skal acceptere vilkårene før du kan tilmelde dig.');
      return;
    }
  
    try {
      // Send e-mailen til API'et
      const response = await axios.post('/api/subscribe', { email });
  
      if (response.status === 200) {
        setMessage(`Tak for at du har tilmeldt dig nyhedsbrevet med ${email}`);
      }
    } catch (error) {
      setMessage('Der opstod en fejl. Prøv venligst igen senere.');
      console.error('Fejl ved tilmelding:', error);
    }
  
    setEmail('');
  };
  

  return (
    <div className="max-w-md mx-auto mb-10 bg-gray-100 p-4 border border-gray-300 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center mb-4">Tilmeld dig vores nyhedsbrev</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 mb-2">Emailadresse:</label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="mr-2"
              checked={gdprConsent}
              onChange={(e) => setGdprConsent(e.target.checked)}
              required
            />
            <span className="text-sm text-gray-600">
              Jeg accepterer <Link to="/privacy-policy" className="text-blue-500 underline">privatlivspolitikken</Link> og giver samtykke til at modtage nyhedsbreve.
            </span>
          </label>
        </div>

        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300">
          Tilmeld
        </button>
      </form>

      {message && <p className="mt-4 text-green-500 text-center">{message}</p>}
    </div>
  );
};

export default Newsletter;
