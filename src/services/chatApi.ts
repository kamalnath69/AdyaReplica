import { Message, ChatResponse, PaginationParams } from '../types/chat';

const API_BASE_URL = 'http://localhost:3001/api';

export const chatApi = {
  async sendMessage(content: string, sessionId?: string): Promise<Message> {
    const response = await fetch(`${API_BASE_URL}/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content, sessionId }),
    });

    if (!response.ok) {
      throw new Error('Failed to send message');
    }

    return response.json();
  },

  async getMessages({ page, limit, sessionId }: PaginationParams): Promise<ChatResponse> {
    const params = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
      ...(sessionId && { sessionId }),
    });

    const response = await fetch(`${API_BASE_URL}/chat/messages?${params}`);

    if (!response.ok) {
      throw new Error('Failed to fetch messages');
    }

    return response.json();
  },
};