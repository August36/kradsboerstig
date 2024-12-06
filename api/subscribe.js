import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;

    try {
      const apiKey = process.env.KLAVIYO_API_KEY; // Hent API-nøglen fra miljøvariabler
      const listId = process.env.KLAVIYO_LIST_ID; // Hent Liste-ID fra miljøvariabler

      if (!apiKey || !listId) {
        return res.status(500).json({ message: 'API-nøgle eller Liste-ID blev ikke fundet i miljøvariabler.' });
      }

      await axios.post(`https://a.klaviyo.com/api/v2/list/${listId}/members`, {
        api_key: apiKey,
        profiles: [
          {
            email: email
          }
        ]
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      

      return res.status(200).json({ message: 'Succesfuldt tilmeldt til listen!' });
    } catch (error) {
      console.error('Fejl ved tilmelding:', error);
      return res.status(500).json({ message: 'Fejl ved tilmelding. Prøv igen senere.' });
    }
  } else {
    return res.status(405).json({ message: 'Metode ikke tilladt' });
  }
}
