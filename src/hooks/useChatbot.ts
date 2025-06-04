import { useState, useEffect, useCallback, useRef } from 'react';
import { Message } from '../types/chat';
import { chatApi } from '../services/chatApi';

export const useChatbot = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [error, setError] = useState<string | null>(null);
  
  // Persist sessionId in localStorage to maintain across page refreshes
  const [sessionId] = useState(() => {
    const stored = localStorage.getItem('chatbot_session_id');
    if (stored) {
      return stored;
    }
    const newSessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    localStorage.setItem('chatbot_session_id', newSessionId);
    return newSessionId;
  });
  
  const isInitialLoad = useRef(true);

  const loadMessages = useCallback(async (pageNum: number = 1, append: boolean = false) => {
    if (isLoading) return;
    
    try {
      setIsLoading(true);
      setError(null);
      
      // Load more messages on initial load for better UX
      const limit = pageNum === 1 ? 20 : 10; // Load 20 messages initially
      
      const response = await chatApi.getMessages({
        page: pageNum,
        limit,
        sessionId,
      });

      setMessages(prev => {
        if (append) {
          // Append older messages to end of array
          const existingIds = new Set(prev.map(m => m._id));
          const newMessages = response.messages.filter(m => !existingIds.has(m._id));
          return [...prev, ...newMessages];
        } else {
          return response.messages;
        }
      });

      setHasMore(response.hasMore);
      setPage(pageNum);
    } catch (error) {
      console.error('Failed to load messages:', error);
      setError('Failed to load messages');
    } finally {
      setIsLoading(false);
    }
  }, [sessionId, isLoading]);

  const sendMessage = async (content: string) => {
    if (!content.trim() || isSending) return;

    const tempId = `temp_${Date.now()}`;
    const userMessage: Message = {
      _id: tempId,
      content,
      isUser: true,
      timestamp: new Date(),
      sessionId,
    };

    // Add new message to the beginning (since we store newest first)
    setMessages(prev => [userMessage, ...prev]);
    setIsSending(true);
    setError(null);

    try {
      const response = await chatApi.sendMessage(content, sessionId);
      
      setMessages(prev => {
        // Remove temp message and add both user and AI messages at the beginning
        const filtered = prev.filter(m => m._id !== tempId);
        // Create proper user message with server timestamp
        const userMsgWithId: Message = {
          ...userMessage,
          _id: `user_${Date.now()}`,
          timestamp: new Date(),
        };
        // Add AI response first, then user message (newest first order)
        return [response, userMsgWithId, ...filtered];
      });
    } catch (error) {
      console.error('Failed to send message:', error);
      setError('Failed to send message');
      setMessages(prev => prev.filter(m => m._id !== tempId));
    } finally {
      setIsSending(false);
    }
  };

  const loadMore = useCallback(() => {
    if (!isLoading && hasMore && !isSending) {
      const nextPage = page + 1;
      loadMessages(nextPage, true);
    }
  }, [isLoading, hasMore, isSending, page, loadMessages]);

  // Initial load
  useEffect(() => {
    if (isInitialLoad.current) {
      isInitialLoad.current = false;
      loadMessages(1, false);
    }
  }, [loadMessages]);

  const retry = () => {
    setError(null);
    loadMessages(1, false);
  };

  const clearSession = () => {
    localStorage.removeItem('chatbot_session_id');
    setMessages([]);
    setPage(1);
    setHasMore(true);
    // Generate new session
    const newSessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    localStorage.setItem('chatbot_session_id', newSessionId);
    window.location.reload(); // Reload to get new session
  };

  return {
    messages,
    isLoading,
    isSending,
    hasMore,
    error,
    sendMessage,
    loadMore,
    retry,
    clearSession,
    sessionId,
  };
};