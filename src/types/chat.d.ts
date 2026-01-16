export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface ChatState {
  messages: Message[];
  isLoading: boolean;
  error: string | null;
}

export interface ChatResponse {
  response: string;
  model: string;
  timestamp: string;
}

export interface ChatRequest {
  message: string;
  conversationHistory: Array<{
    role: 'user' | 'assistant';
    content: string;
  }>;
}

// Types pour le streaming
export interface StreamChunk {
  type: 'content';
  content: string;
  model: string;
  timestamp: string;
}

export interface StreamError {
  type: 'error';
  error: string;
}
