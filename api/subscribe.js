import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;

    try {
      const apiKey = 'din-hardcoded-api-key'; // Skift denne ud med din Klaviyo API-nøgle
      const listId = 'dit-hardcoded-list-id'; // Skift denne ud med dit liste-ID

      if (!apiKey || !listId) {
        return res.status(500).json({ message: 'API-nøgle eller Liste-ID mangler.' });
      }

      // Send POST-request til det nye Klaviyo API
      const response = await axios.post(
        `https://a.klaviyo.com/api/lists/${listId}/subscribe`,
        {
          profiles: [{ email: email }],
        },
        {
          headers: {
            Authorization: `Klaviyo-API-Key ${apiKey}`,
            'Content-Type': 'application/json',
          },
        }
      );

      console.log('Klaviyo API-svar:', response.data);

      return res.status(200).json({ message: 'Succesfuldt tilmeldt til listen!' });
    } catch (error) {
      console.error('Fejl ved tilmelding:', error);

      if (error.response) {
        console.error('Klaviyo API-fejl:', error.response.data); // Log detaljeret fejl
      }

      return res.status(500).json({ message: 'Fejl ved tilmelding. Prøv igen senere.' });
    }
  } else {
    return res.status(405).json({ message: 'Metode ikke tilladt' });
  }
}
