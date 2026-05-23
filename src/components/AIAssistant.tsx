import React, { useState } from 'react';
import { Bot, X, Send, Sparkles, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';

interface AIAssistantProps {
  content: string;
  title: string;
  lang: 'en' | 'ru';
}

export const AIAssistant: React.FC<AIAssistantProps> = ({ content, title, lang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant', text: string }[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!query.trim()) return;

    const userMsg = query;
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setQuery('');
    setIsLoading(true);

    // Mock RAG logic:
    // In a real implementation, this would send 'userMsg' + 'content' to an LLM.
    setTimeout(() => {
      let response = '';
      if (lang === 'en') {
        response = `Based on the article "${title}", I can tell you that the core concepts involve complex mathematical derivations. If you're asking about "${userMsg}", the text mentions related theories but you might want to check the specific formulas in the "How it Works" section. (Note: Real LLM integration required for dynamic answers).`;
      } else {
        response = `Основываясь на статье "${title}", я могу сказать, что основные концепции включают сложные математические выводы. Если вы спрашиваете про "${userMsg}", в тексте упоминаются соответствующие теории, но вам стоит обратить внимание на конкретные формулы в разделе "Как это работает". (Примечание: для динамических ответов требуется интеграция с LLM).`;
      }
      
      setMessages(prev => [...prev, { role: 'assistant', text: response }]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-all hover:scale-110 active:scale-95 group print:hidden"
        title={lang === 'en' ? 'Ask AI Assistant' : 'Спросить ИИ-ассистента'}
      >
        <Bot className="w-6 h-6" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-2 py-1 rounded bg-zinc-900 text-white text-[10px] font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          {lang === 'en' ? 'Deep Dive AI' : 'ИИ-погружение'}
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 w-[350px] max-w-[calc(100vw-3rem)] h-[500px] bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl border border-zinc-200 dark:border-zinc-800 flex flex-col overflow-hidden print:hidden"
          >
            {/* Header */}
            <div className="p-4 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between bg-zinc-50 dark:bg-zinc-950/50">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold">{lang === 'en' ? 'Immersion Assistant' : 'ИИ-Ассистент'}</h3>
                  <p className="text-[10px] text-zinc-500">Context: {title}</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-1 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200">
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.length === 0 && (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-3 opacity-50">
                  <MessageSquare className="w-8 h-8 text-zinc-400" />
                  <p className="text-xs max-w-[200px]">
                    {lang === 'en' 
                      ? 'Ask anything about this article. I have full context of the content.' 
                      : 'Задайте любой вопрос по этой статье. У меня есть полный контекст содержания.'}
                  </p>
                </div>
              )}
              {messages.map((m, i) => (
                <div key={i} className={cn(
                  "flex flex-col max-w-[85%]",
                  m.role === 'user' ? "ml-auto items-end" : "mr-auto items-start"
                )}>
                  <div className={cn(
                    "px-3 py-2 rounded-2xl text-xs",
                    m.role === 'user' 
                      ? "bg-blue-600 text-white rounded-br-none" 
                      : "bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 rounded-bl-none"
                  )}>
                    {m.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-1 items-center px-3 py-2 bg-zinc-100 dark:bg-zinc-800 rounded-2xl rounded-bl-none w-12 justify-center">
                  <span className="w-1 h-1 bg-zinc-400 rounded-full animate-bounce" />
                  <span className="w-1 h-1 bg-zinc-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1 h-1 bg-zinc-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-3 border-t border-zinc-200 dark:border-zinc-800">
              <div className="relative flex items-center gap-2">
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder={lang === 'en' ? 'Ask AI...' : 'Спросить...'}
                  className="flex-1 bg-zinc-100 dark:bg-zinc-800 border-none rounded-xl px-3 py-2 text-xs focus:ring-1 focus:ring-blue-500 outline-none"
                />
                <button
                  onClick={handleSend}
                  disabled={!query.trim() || isLoading}
                  className="p-2 rounded-xl bg-blue-600 text-white disabled:opacity-50 hover:bg-blue-700 transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
              <div className="mt-2 text-[8px] text-center text-zinc-400">
                Powered by RAG Infrastructure
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
