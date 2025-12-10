import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Send, Loader2, MessageSquare } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

const AiDesigner: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      text: "Hello! I'm the AruArtZone AI Creative Assistant. Need ideas for a logo, color palette, or a catchy slogan? Just ask!"
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const response = await sendMessageToGemini(userMessage);
      setMessages(prev => [...prev, { role: 'model', text: response }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "Sorry, I'm having trouble connecting to the creative cloud right now.", isError: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Info */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-800/50 border border-indigo-500/30 text-indigo-200 font-medium text-sm">
            <Sparkles size={16} />
            <span>Powered by Gemini AI</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Unlock Creativity with <br/>
            <span className="text-orange-400">Artificial Intelligence</span>
          </h2>
          <p className="text-indigo-200 text-lg">
            Stuck on a design concept? Need a witty tagline for your new business in Arua? 
            Our AI assistant is trained to help you brainstorm ideas before we bring them to life.
          </p>
          
          <ul className="space-y-4">
            {[
              "Generate color palette ideas for your brand",
              "Brainstorm catchy slogans and taglines",
              "Get recommendations for font pairings",
              "Draft content for your business cards"
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-3 text-indigo-100">
                <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center text-xs font-bold">✓</div>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side: Chat Interface */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden h-[500px] flex flex-col border border-indigo-700/30">
          {/* Chat Header */}
          <div className="bg-slate-50 border-b p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white">
                <Sparkles size={20} />
              </div>
              <div>
                <h3 className="font-bold text-slate-800">Creative Assistant</h3>
                <p className="text-xs text-green-600 flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span> Online
                </p>
              </div>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl p-4 text-sm ${
                    msg.role === 'user'
                      ? 'bg-indigo-600 text-white rounded-br-none'
                      : 'bg-white text-slate-700 shadow-sm border border-slate-100 rounded-bl-none'
                  }`}
                >
                  <p className="whitespace-pre-wrap leading-relaxed">{msg.text}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-2xl rounded-bl-none shadow-sm border border-slate-100 flex items-center gap-2">
                  <Loader2 size={16} className="animate-spin text-indigo-600" />
                  <span className="text-xs text-slate-500">Thinking...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-slate-100">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask for a slogan, color idea, etc..."
                className="w-full pl-4 pr-12 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-slate-800 placeholder-slate-400"
                disabled={isLoading}
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="absolute right-2 top-2 p-1.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiDesigner;
