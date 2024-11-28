import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, Loader, Paperclip, Mic, Bot, Phone } from 'lucide-react';
import { processQuery, getLawyersBySpecialization } from '../utils/ragUtils';
import type { LegalFirm } from '../data/legalFirmsData';

type Message = {
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  suggestedLawyers?: LegalFirm[];
};

export default function AIAssistant() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      type: 'user',
      content: input.trim(),
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = processQuery(input.trim());
      
      const assistantMessage: Message = {
        type: 'assistant',
        content: response.answer,
        timestamp: new Date(),
        suggestedLawyers: response.suggestedLawyers
      };
      
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="bg-white rounded-xl shadow-xl h-[700px] flex flex-col overflow-hidden border border-gray-200">
        <div className="p-4 border-b flex items-center justify-between bg-black text-white rounded-t-xl">
          <div className="flex items-center">
            <Bot className="h-6 w-6" />
            <h2 className="text-xl font-bold ml-2">Legal AI Assistant</h2>
          </div>
          <span className="text-sm bg-white text-black px-3 py-1 rounded-full">Online</span>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl p-4 ${
                  message.type === 'user'
                    ? 'bg-black text-white'
                    : 'bg-white border border-gray-200 text-black'
                }`}
              >
                <div className="flex flex-col">
                  <span className="text-sm mb-1 font-medium">
                    {message.type === 'user' ? 'You' : 'AI Assistant'}
                  </span>
                  <p className="text-sm md:text-base">{message.content}</p>
                  {message.suggestedLawyers && (
                    <div className="mt-4 space-y-2">
                      <p className="font-medium">Recommended Legal Professionals:</p>
                      {message.suggestedLawyers.slice(0, 3).map((lawyer, idx) => (
                        <div key={idx} className="bg-gray-50 p-3 rounded-lg">
                          <p className="font-medium">{lawyer.companyName}</p>
                          <p className="text-sm text-gray-600">{lawyer.specialization}</p>
                          <div className="flex items-center mt-2">
                            <a
                              href={`tel:${lawyer.phone}`}
                              className="flex items-center text-sm text-black hover:text-gray-600"
                            >
                              <Phone className="h-4 w-4 mr-1" />
                              {lawyer.phone}
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  <span className="text-xs mt-2 opacity-70">
                    {message.timestamp.toLocaleTimeString()}
                  </span>
                </div>
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="bg-white border border-gray-200 rounded-2xl p-4">
                <Loader className="h-5 w-5 animate-spin text-black" />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="p-4 border-t bg-white">
          <div className="flex items-end space-x-2">
            <button className="p-2 text-gray-500 hover:text-black transition-colors">
              <Paperclip className="h-5 w-5" />
            </button>
            <div className="flex-1 relative">
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask your legal question..."
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-black resize-none bg-gray-50"
                rows={1}
                style={{ minHeight: '44px', maxHeight: '120px' }}
              />
            </div>
            <button className="p-2 text-gray-500 hover:text-black transition-colors">
              <Mic className="h-5 w-5" />
            </button>
            <button
              onClick={handleSend}
              disabled={loading || !input.trim()}
              className="bg-black text-white p-3 rounded-xl hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
              <Send className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}