
import React, { useState, useRef, useEffect } from 'react';
import type { ChatMessage } from '../types';
import { SendIcon, BotIcon, UserIcon, ChevronDownIcon, ChevronUpIcon } from './Icons';

interface ChatPanelProps {
    chatHistory: ChatMessage[];
    isLoading: boolean;
    onSendMessage: (message: string) => void;
}

const ChatPanel: React.FC<ChatPanelProps> = ({ chatHistory, isLoading, onSendMessage }) => {
    const [inputValue, setInputValue] = useState('');
    const [isOpen, setIsOpen] = useState(true);
    const chatEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(scrollToBottom, [chatHistory]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (inputValue.trim() && !isLoading) {
            onSendMessage(inputValue);
            setInputValue('');
        }
    };

    return (
        <div className="fixed bottom-0 right-0 sm:bottom-4 sm:right-4 w-full sm:w-96 z-50">
            <div className="bg-azure-medium shadow-2xl rounded-t-lg sm:rounded-lg border border-azure-light flex flex-col">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full p-3 bg-azure-light rounded-t-lg flex justify-between items-center cursor-pointer hover:bg-opacity-80"
                >
                    <h3 className="font-bold text-white">MLOps AI Assistant</h3>
                    {isOpen ? <ChevronDownIcon className="w-6 h-6" /> : <ChevronUpIcon className="w-6 h-6" />}
                </button>

                {isOpen && (
                    <>
                        <div className="flex-1 p-4 h-80 overflow-y-auto">
                            {chatHistory.map((msg, index) => (
                                <div key={index} className={`flex items-start gap-3 my-4 ${msg.sender === 'user' ? 'justify-end' : ''}`}>
                                    {msg.sender === 'ai' && <BotIcon className="w-8 h-8 flex-shrink-0 text-accent-cyan mt-1" />}
                                    <div className={`p-3 rounded-lg max-w-xs ${msg.sender === 'user' ? 'bg-azure-blue text-white' : 'bg-azure-light text-gray-200'}`}>
                                        <p className="text-sm" dangerouslySetInnerHTML={{ __html: msg.text.replace(/\n/g, '<br />') }}></p>
                                    </div>
                                    {msg.sender === 'user' && <UserIcon className="w-8 h-8 flex-shrink-0 text-gray-400 mt-1" />}
                                </div>
                            ))}
                            {isLoading && (
                                <div className="flex items-start gap-3 my-4">
                                     <BotIcon className="w-8 h-8 flex-shrink-0 text-accent-cyan mt-1" />
                                     <div className="p-3 rounded-lg bg-azure-light text-gray-200">
                                        <div className="flex items-center space-x-1">
                                            <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse-fast"></span>
                                            <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse-fast animation-delay-200"></span>
                                            <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse-fast animation-delay-400"></span>
                                        </div>
                                     </div>
                                </div>
                            )}
                            <div ref={chatEndRef} />
                        </div>
                        <form onSubmit={handleSubmit} className="p-3 border-t border-azure-light flex items-center gap-2">
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                placeholder="Ask about the pipeline..."
                                className="flex-1 bg-azure-dark border border-azure-light rounded-full py-2 px-4 text-sm text-white focus:outline-none focus:ring-2 focus:ring-azure-blue"
                                disabled={isLoading}
                            />
                            <button
                                type="submit"
                                className="bg-azure-blue rounded-full p-2 text-white hover:bg-opacity-90 disabled:bg-gray-500 disabled:cursor-not-allowed"
                                disabled={isLoading}
                            >
                                <SendIcon className="w-5 h-5" />
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
};

export default ChatPanel;
