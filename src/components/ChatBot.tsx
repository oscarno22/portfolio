import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import dotenv from 'dotenv';

dotenv.config();

interface Message {
  text: string;
  isUser: boolean;
}

const CHAT_API_URL = process.env.NEXT_PUBLIC_CHAT_API_URL || 'https://8s02s77xg6.execute-api.us-east-1.amazonaws.com/prod/chat';

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim() || isLoading) return;

    // Add user message
    const newMessages = [...messages, { text: inputText, isUser: true }];
    setMessages(newMessages);
    setInputText('');
    setIsLoading(true);

    try {
      const response = await fetch(CHAT_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: inputText }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      setMessages([...newMessages, { text: data.response, isUser: false }]);
    } catch (error) {
      console.error('Error:', error);
      setMessages([
        ...newMessages,
        { text: 'Sorry, I encountered an error. Please try again.', isUser: false },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 left-8 bg-primary-600 text-white p-3 rounded-full shadow-lg z-50 md:left-8 left-4"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
          />
        </svg>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-24 left-4 right-4 md:right-auto md:left-8 md:w-[400px] w-auto bg-white dark:bg-slate-900 rounded-lg shadow-xl z-50 overflow-hidden border border-gray-200 dark:border-gray-700"
          >
            {/* Header */}
            <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Chat with me</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Messages */}
            <div className="h-96 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[280px] break-words whitespace-pre-wrap rounded-lg px-4 py-2 ${
                      message.isUser
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-100 dark:bg-slate-800 text-gray-900 dark:text-white'
                    }`}
                  >
                    {message.text}
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-gray-100 dark:bg-slate-800 rounded-lg px-4 py-2 flex gap-1">
                    <span className="animate-bounce">.</span>
                    <span className="animate-bounce delay-100">.</span>
                    <span className="animate-bounce delay-200">.</span>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Input */}
            <form onSubmit={handleSendMessage} className="border-t border-gray-200 dark:border-gray-700 p-4 md:p-4 p-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Type a message..."
                  disabled={isLoading}
                  className="flex-1 rounded-lg border border-gray-300 dark:border-gray-600 p-2 text-sm md:text-base focus:outline-none focus:border-primary-600 dark:bg-slate-800 dark:text-white disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="bg-primary-600 text-white px-3 md:px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors disabled:opacity-50 text-sm md:text-base whitespace-nowrap"
                >
                  Send
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 