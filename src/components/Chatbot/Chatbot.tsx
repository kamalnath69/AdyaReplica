import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Minimize2, Maximize2, RotateCcw, Sparkles } from 'lucide-react';
import { useChatbot } from '../../hooks/useChatbot';
import { VirtualizedMessageList } from './VirtualizedMessageList';
import { ChatInput } from './ChatInput';

export const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const { 
    messages, 
    isLoading, 
    isSending, 
    hasMore, 
    error, 
    sendMessage, 
    loadMore, 
    retry,
    clearSession 
  } = useChatbot();

  // Handle escape key to close chat
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setIsMinimized(false);
    }
  };

  const handleClearSession = () => {
    if (confirm('Are you sure you want to clear the chat history?')) {
      clearSession();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 z-[9999] p-4 bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 hover:from-blue-700 hover:via-blue-800 hover:to-purple-700 text-white rounded-full shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_25px_rgba(59,130,246,0.7)] transition-all duration-300 hover:scale-110 group"
        aria-label="Open AI Assistant"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        
        {/* Sparkle effect */}
        <div className="absolute -top-1 -right-1 opacity-80 group-hover:opacity-100 transition-opacity">
          <Sparkles size={12} className="text-yellow-300 animate-pulse" />
        </div>
        
        {/* Notification dot for new messages */}
        {!isOpen && messages.length > 0 && (
          <div className="absolute -top-1 -left-1 w-3 h-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-full animate-pulse shadow-lg"></div>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className={`fixed bottom-24 right-6 z-[9998] bg-gradient-to-b from-gray-900 via-black to-gray-900 border border-blue-500/20 rounded-2xl shadow-[0_0_30px_rgba(59,130,246,0.3)] flex flex-col transition-all duration-300 backdrop-blur-sm ${
          isMinimized 
            ? 'w-80 h-16' 
            : 'w-80 h-[32rem] sm:w-96 sm:h-[36rem]'
        }`}>
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-blue-500/20 bg-gradient-to-r from-blue-900/30 via-purple-900/30 to-blue-900/30 rounded-t-2xl backdrop-blur-sm">
            <div className="flex items-center space-x-3">
              <div className="relative w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                <MessageCircle size={16} className="text-white" />
                <div className="absolute -top-0.5 -right-0.5">
                  <Sparkles size={8} className="text-yellow-300 animate-pulse" />
                </div>
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  AI Assistant
                </h3>
                {!isMinimized && (
                  <p className="text-blue-300/80 text-xs font-medium">
                    {isSending ? (
                      <span className="flex items-center gap-1">
                        <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
                        Thinking...
                      </span>
                    ) : (
                      <span className="flex items-center gap-1">
                        <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                        Online
                      </span>
                    )}
                  </p>
                )}
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              {!isMinimized && (
                <button
                  onClick={handleClearSession}
                  className="p-1.5 text-blue-300/70 hover:text-white hover:bg-blue-500/20 rounded-lg transition-all duration-200"
                  aria-label="Clear chat history"
                  title="Clear chat history"
                >
                  <RotateCcw size={14} />
                </button>
              )}
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="p-1.5 text-blue-300/70 hover:text-white hover:bg-blue-500/20 rounded-lg transition-all duration-200"
                aria-label={isMinimized ? 'Maximize' : 'Minimize'}
              >
                {isMinimized ? <Maximize2 size={14} /> : <Minimize2 size={14} />}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-blue-300/70 hover:text-white hover:bg-red-500/20 rounded-lg transition-all duration-200"
                aria-label="Close chat"
              >
                <X size={14} />
              </button>
            </div>
          </div>

          {/* Messages Container */}
          {!isMinimized && (
            <div className="flex flex-col h-full">
              {/* Messages Area */}
              <div className="flex-1 overflow-hidden bg-gradient-to-b from-gray-900/50 to-black/50">
                <VirtualizedMessageList
                  messages={messages}
                  hasMore={hasMore}
                  loadMore={loadMore}
                  isLoading={isLoading}
                  error={error}
                  onRetry={retry}
                />
              </div>

              {/* Input Area - No gap */}
              <div className="border-t border-blue-500/20">
                <ChatInput 
                  onSendMessage={sendMessage} 
                  disabled={isLoading} 
                  isSending={isSending}
                />
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};