import { useState, useCallback } from 'react';
import type { Message, ChatState, ChatRequest } from '@/types/chat';

export const useChat = () => {
  const [state, setState] = useState<ChatState>({
    messages: [],
    isLoading: false,
    error: null,
  });

  const [streamingContent, setStreamingContent] = useState("");

  const sendMessage = useCallback(async (content: string) => {
    if (!content.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: content.trim(),
      timestamp: new Date(),
    };

    // Ajouter seulement le message utilisateur et activer le loading
    setState(prev => ({
      ...prev,
      messages: [...prev.messages, userMessage],
      isLoading: true,
      error: null,
    }));

    // Réinitialiser le contenu streaming
    setStreamingContent("");

    try {
      const requestBody: ChatRequest = {
        message: content.trim(),
        conversationHistory: state.messages.map(msg => ({
          role: msg.role,
          content: msg.content,
        })),
      };

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status}`);
      }

      // Gérer le streaming
      const reader = response.body?.getReader();
      if (!reader) {
        throw new Error('Impossible de lire le stream de réponse');
      }

      let fullContent = '';
      let hasFirstChunk = false;
      
      try {
        while (true) {
          const { done, value } = await reader.read();
          
          if (done) break;
          
          // Convertir le chunk en texte
          const chunk = new TextDecoder().decode(value);
          const lines = chunk.split('\n');
          
          for (const line of lines) {
            if (line.startsWith('data: ')) {
              const data = line.slice(6);
              
              try {
                const parsed = JSON.parse(data);
                
                if (parsed.type === 'content' && parsed.content) {
                  fullContent += parsed.content;
                  
                  // Dès que le premier chunk arrive, on arrête le loading
                  if (!hasFirstChunk) {
                    hasFirstChunk = true;
                    setState(prev => ({ ...prev, isLoading: false }));
                  }
                  
                  // Mise à jour du contenu streaming
                  setStreamingContent(fullContent);
                }
              } catch (e) {
                // Ignorer les erreurs de parsing
                console.error('Erreur dans le stream:', e);
              }
            }
          }
        }
        
        // Créer le message final avec tout le contenu
        const assistantMessage: Message = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: fullContent,
          timestamp: new Date(),
        };

        setState(prev => ({
          ...prev,
          messages: [...prev.messages, assistantMessage],
          error: null,
        }));

        // Réinitialiser le contenu streaming
        setStreamingContent("");
        
      } finally {
        reader.releaseLock();
      }

    } catch (error) {
      console.error('Erreur lors de l\'envoi du message:', error);
      
      // Créer un message d'erreur
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'Désolé, je rencontre des difficultés techniques. Pouvez-vous réessayer ?',
        timestamp: new Date(),
      };

      setState(prev => ({
        ...prev,
        messages: [...prev.messages, errorMessage],
        isLoading: false,
        error: 'Erreur de communication avec l\'assistant',
      }));

      // Réinitialiser le contenu streaming
      setStreamingContent("");
    }
  }, [state.messages]);

  const clearMessages = useCallback(() => {
    setState(prev => ({
      ...prev,
      messages: [],
      error: null,
    }));
    setStreamingContent("");
  }, []);

  const addSuggestedQuestion = useCallback((question: string) => {
    sendMessage(question);
  }, [sendMessage]);

  return {
    ...state,
    streamingContent,
    sendMessage,
    clearMessages,
    addSuggestedQuestion,
  };
};
