import React from 'react';
import { Message } from '../../types/chat';
import { Bot, User, Sparkles } from 'lucide-react';

interface ChatMessageProps {
  message: Message;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const formatTime = (timestamp: Date) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className={`flex mb-4 px-4 ${message.isUser ? 'justify-end' : 'justify-start'}`}>
      <div className={`flex max-w-[75%] ${message.isUser ? 'flex-row-reverse' : 'flex-row'}`}>
        {/* Avatar */}
        <div className={`flex-shrink-0 ${message.isUser ? 'ml-3' : 'mr-3'}`}>
          <div className={`relative w-8 h-8 rounded-full flex items-center justify-center shadow-lg ${
            message.isUser 
              ? 'bg-gradient-to-r from-blue-600 to-purple-600 shadow-blue-500/30' 
              : 'bg-gradient-to-r from-gray-700 to-gray-600 shadow-gray-500/30'
          }`}>
            {message.isUser ? (
              <User size={16} className="text-white" />
            ) : (
              <>
                <Bot size={16} className="text-white" />
                <div className="absolute -top-0.5 -right-0.5">
                  <Sparkles size={6} className="text-yellow-300 animate-pulse" />
                </div>
              </>
            )}
          </div>
        </div>

        {/* Message Content */}
        <div className="flex flex-col">
          <div
            className={`px-4 py-3 rounded-2xl text-sm break-words shadow-lg backdrop-blur-sm ${
              message.isUser
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-br-md shadow-blue-500/20'
                : 'bg-gradient-to-r from-gray-800/80 to-gray-700/80 text-gray-100 rounded-bl-md shadow-gray-500/20 border border-gray-600/30'
            }`}
          >
            <p className="whitespace-pre-wrap leading-relaxed font-medium">{message.content}</p>
          </div>
          
          {/* Timestamp */}
          <div className={`text-xs text-blue-300/60 mt-1 font-medium ${
            message.isUser ? 'text-right' : 'text-left'
          }`}>
            {formatTime(message.timestamp)}
          </div>
        </div>
      </div>
    </div>
  );
};