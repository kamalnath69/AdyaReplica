const Groq = require('groq-sdk');

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

const generateResponse = async (userMessage) => {
  try {
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: 'You are a helpful AI assistant. Provide concise and helpful responses.',
        },
        {
          role: 'user',
          content: userMessage,
        },
      ],
      model: 'llama3-8b-8192',
      temperature: 0.3,
      max_tokens: 512,
    });

    return chatCompletion.choices[0]?.message?.content || 'Sorry, I could not generate a response.';
  } catch (error) {
    console.error('Groq API Error:', error);
    throw new Error('Failed to generate AI response');
  }
};

module.exports = { generateResponse };