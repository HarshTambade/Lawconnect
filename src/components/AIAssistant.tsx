import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, Loader, Paperclip, Mic, Bot } from 'lucide-react';

type Message = {
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
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

    const newMessage: Message = {
      type: 'user',
      content: input.trim(),
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, newMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${import.meta.env.VITE_GEMINI_API_KEY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: input.trim()
            }]
          }]
        })
      });

      const data = await response.json();
      
      const assistantMessage: Message = {
        type: 'assistant',
        content: data.candidates[0].content.parts[0].text,
        timestamp: new Date(),
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
      <div className="bg-white rounded-xl shadow-xl h-[700px] flex flex-col overflow-hidden">
        <div className="p-4 border-b flex items-center justify-between bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-t-xl">
          <div className="flex items-center">
            <Bot className="h-6 w-6" />
            <h2 className="text-xl font-bold ml-2">Legal AI Assistant</h2>
          </div>
          <span className="text-sm bg-emerald-500 px-3 py-1 rounded-full shadow-lg">Online</span>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-gray-50 to-white">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl p-4 shadow-md ${
                  message.type === 'user'
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'
                    : 'bg-white border border-gray-100 text-gray-800'
                }`}
              >
                <div className="flex flex-col">
                  <span className="text-sm mb-1 font-medium">
                    {message.type === 'user' ? 'You' : 'AI Assistant'}
                  </span>
                  <p className="text-sm md:text-base">{message.content}</p>
                  <span className="text-xs mt-2 opacity-70">
                    {message.timestamp.toLocaleTimeString()}
                  </span>
                </div>
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-md">
                <Loader className="h-5 w-5 animate-spin text-indigo-600" />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="p-4 border-t bg-white">
          <div className="flex items-end space-x-2">
            <button className="p-2 text-gray-500 hover:text-indigo-600 transition-colors">
              <Paperclip className="h-5 w-5" />
            </button>
            <div className="flex-1 relative">
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask your legal question..."
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 resize-none bg-gray-50"
                rows={1}
                style={{ minHeight: '44px', maxHeight: '120px' }}
              />
            </div>
            <button className="p-2 text-gray-500 hover:text-indigo-600 transition-colors">
              <Mic className="h-5 w-5" />
            </button>
            <button
              onClick={handleSend}
              disabled={loading || !input.trim()}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-3 rounded-xl hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg"
            >
              <Send className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}