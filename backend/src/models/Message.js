// filepath: d:\project-bolt-sb1-afa5apb9\project\backend\src\models\Message.js
const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  isUser: {
    type: Boolean,
    required: true,
  },
  sessionId: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

// Index for efficient pagination
messageSchema.index({ sessionId: 1, timestamp: -1 });

module.exports = mongoose.model('Message', messageSchema);