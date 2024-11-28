import { config } from '../config/env';

export async function generateDocument(prompt: string) {
  if (!import.meta.env.VITE_GEMINI_API_KEY) {
    throw new Error('API key is not configured');
  }

  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${import.meta.env.VITE_GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: `Generate a legal document based on the following request: ${prompt}`
          }]
        }]
      })
    });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();
    
    if (!data.candidates?.[0]?.content?.parts?.[0]?.text) {
      throw new Error('Invalid response format from API');
    }

    return data.candidates[0].content.parts[0].text;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Document generation failed: ${error.message}`);
    }
    throw new Error('Document generation failed');
  }
}