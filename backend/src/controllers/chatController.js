const Message = require('../models/Message');
const { generateResponse } = require('../services/groqService');

const sendMessage = async (req, res) => {
  try {
    const { content, sessionId } = req.body;

    if (!content || !sessionId) {
      return res.status(400).json({ error: 'Content and sessionId are required' });
    }

    // Save user message
    const userMessage = new Message({
      content,
      isUser: true,
      sessionId,
    });
    await userMessage.save();

    // Generate AI response
    const aiResponse = await generateResponse(content);

    // Save AI response
    const aiMessage = new Message({
      content: aiResponse,
      isUser: false,
      sessionId,
    });
    await aiMessage.save();

    // Return the AI message
    res.json({
      _id: aiMessage._id,
      content: aiMessage.content,
      isUser: aiMessage.isUser,
      timestamp: aiMessage.timestamp,
      sessionId: aiMessage.sessionId,
    });
  } catch (error) {
    console.error('Chat error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const getMessages = async (req, res) => {
  try {
    const { page = 1, limit = 10, sessionId } = req.query;
    const pageNum = parseInt(page);
    const limitNum = parseInt(limit);
    const skip = (pageNum - 1) * limitNum;

    const query = sessionId ? { sessionId } : {};

    // Get messages in descending order (newest first) 
    // This helps with pagination - page 1 gets newest messages
    const messages = await Message.find(query)
      .sort({ timestamp: -1 })
      .skip(skip)
      .limit(limitNum)
      .lean();

    const total = await Message.countDocuments(query);
    const hasMore = skip + messages.length < total;

    // Format messages properly
    const formattedMessages = messages.map(msg => ({
      _id: msg._id,
      content: msg.content,
      isUser: msg.isUser,
      timestamp: msg.timestamp,
      sessionId: msg.sessionId,
    }));

    res.json({
      messages: formattedMessages,
      hasMore,
      total,
      currentPage: pageNum,
    });
  } catch (error) {
    console.error('Get messages error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { sendMessage, getMessages };