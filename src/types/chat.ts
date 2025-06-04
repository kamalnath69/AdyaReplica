export interface Message {
  _id?: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
  sessionId?: string;
}

export interface ChatResponse {
  messages: Message[];
  hasMore: boolean;
  total: number;
  currentPage: number;
}

export interface PaginationParams {
  page: number;
  limit: number;
  sessionId?: string;
}

export interface ChatSession {
  sessionId: string;
  messages: Message[];
  hasMore: boolean;
  isLoading: boolean;
  error?: string;
}