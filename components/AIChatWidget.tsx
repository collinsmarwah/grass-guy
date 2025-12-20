
import React, { useState, useRef, useEffect } from 'react';
import { getLawnCareAdvice } from '../services/geminiService';
import { ChatMessage } from '../types';

export const AIChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Howdy! I'm your AI Lawn Assistant. Ask me anything about your grass, weeds, or lawn schedule!" }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || loading) return;

    const userMsg = input.trim();
    setInput('');
    const newHistory = [...messages, { role: 'user' as const, text: userMsg }];
    setMessages(newHistory);
    setLoading(true);

    try {
      const response = await getLawnCareAdvice(messages, userMsg);
      setMessages(prev => [...prev, { role: 'model', text: response }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'model', text: "Sorry, I hit a snag. Try again!" }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {isOpen ? (
        <div className="bg-white dark:bg-background-dark w-[350px] sm:w-[400px] h-[500px] rounded-2xl shadow-2xl flex flex-col border border-gray-200 dark:border-gray-800 overflow-hidden animate-in fade-in zoom-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-primary p-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary shadow-inner">
                <span className="material-symbols-outlined font-bold">smart_toy</span>
              </div>
              <div>
                <h3 className="font-black text-background-dark text-sm leading-tight">Lawn Assistant</h3>
                <p className="text-[10px] font-bold text-background-dark/60 uppercase tracking-widest">Always Online</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-background-dark hover:bg-black/10 rounded-full p-1 transition-colors">
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-grow overflow-y-auto p-4 space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm font-medium leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-primary text-background-dark rounded-br-none' 
                    : 'bg-gray-100 dark:bg-gray-800 text-text-main dark:text-white rounded-bl-none shadow-sm'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 dark:bg-gray-800 px-4 py-3 rounded-2xl rounded-bl-none animate-pulse flex gap-1">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSend} className="p-4 border-t border-gray-100 dark:border-gray-800 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about your lawn..."
              className="flex-grow bg-gray-50 dark:bg-gray-900 border-0 focus:ring-2 focus:ring-primary rounded-xl px-4 py-2 text-sm text-text-main dark:text-white"
            />
            <button type="submit" disabled={loading} className="bg-primary hover:bg-primary-dark text-background-dark w-10 h-10 rounded-xl flex items-center justify-center transition-all active:scale-90">
              <span className="material-symbols-outlined">send</span>
            </button>
          </form>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-primary hover:bg-primary-dark text-background-dark w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all transform hover:scale-110 active:scale-95 group relative"
        >
          <span className="material-symbols-outlined text-3xl font-bold">smart_toy</span>
          <span className="absolute -top-1 -right-1 bg-red-500 w-4 h-4 rounded-full border-2 border-white dark:border-background-dark"></span>
          <div className="absolute right-20 bg-white dark:bg-background-dark px-4 py-2 rounded-xl text-xs font-bold text-text-main dark:text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl border border-gray-100 dark:border-gray-800">
            Lawn help?
          </div>
        </button>
      )}
    </div>
  );
};
