const express = require('express');
const { sendMessage, getMessages } = require('../controllers/chatController');

const router = express.Router();

router.post('/chat', sendMessage);
router.get('/chat/messages', getMessages);

module.exports = router;