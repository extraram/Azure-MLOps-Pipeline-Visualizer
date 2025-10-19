
import React, { useState } from 'react';
import { PipelineStageData, ChatMessage } from './types';
import { PIPELINE_STAGES } from './constants';
import { AzureIcon, DatabricksIcon, PythonIcon, ScikitLearnIcon, MLFlowIcon, BranchIcon, MergeIcon, EndpointIcon, RegistryIcon, SynapseIcon, DoubleArrowIcon } from './components/Icons';
import PipelineStage from './components/PipelineStage';
import ChatPanel from './components/ChatPanel';
import { callGemini } from './services/geminiService';

const App: React.FC = () => {
    const [chatHistory, setChatHistory] = useState<ChatMessage[]>([
        {
            sender: 'ai',
            text: "Hello! I'm your Azure MLOps assistant. Ask me anything about this pipeline, such as 'Explain the model training stage' or 'Why use parallel training?'.",
        },
    ]);
    const [isLoading, setIsLoading] = useState(false);

    const handleSendMessage = async (message: string) => {
        const userMessage: ChatMessage = { sender: 'user', text: message };
        setChatHistory(prev => [...prev, userMessage]);
        setIsLoading(true);

        try {
            const aiResponse = await callGemini(message, chatHistory);
            const aiMessage: ChatMessage = { sender: 'ai', text: aiResponse };
            setChatHistory(prev => [...prev, aiMessage]);
        } catch (error) {
            console.error('Error calling Gemini API:', error);
            const errorMessage: ChatMessage = {
                sender: 'ai',
                text: 'Sorry, I encountered an error. Please try again.',
            };
            setChatHistory(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-azure-dark font-sans p-4 sm:p-6 lg:p-8">
            <header className="text-center mb-8">
                <div className="flex justify-center items-center gap-4">
                    <AzureIcon className="w-12 h-12 text-azure-blue" />
                    <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-wider">
                        Automated Predictive Analytics Pipeline
                    </h1>
                </div>
                <p className="text-gray-400 mt-2">An MLOps Workflow Visualization on Azure Machine Learning</p>
            </header>

            <main className="flex flex-col items-center">
                <div className="w-full max-w-7xl mx-auto">
                    <div className="relative flex flex-col items-center space-y-8">
                        {/* Stages 1 & 2 */}
                        <PipelineStage stage={PIPELINE_STAGES[0]} />
                        <DoubleArrowIcon className="w-8 h-8 text-gray-500" />
                        <PipelineStage stage={PIPELINE_STAGES[1]} />
                        <DoubleArrowIcon className="w-8 h-8 text-gray-500" />

                        {/* Stage 3: Parallel Training */}
                        <div className="w-full text-center">
                            <div className="inline-block p-4 bg-azure-medium rounded-lg shadow-lg">
                                 <h3 className="text-xl font-semibold text-accent-cyan mb-2">3. Model Training & Experimentation</h3>
                                 <p className="text-sm text-gray-400 max-w-md mx-auto">A dual training strategy is used to find the best model, with MLflow tracking all experiments for reproducibility.</p>
                            </div>
                        </div>

                        <div className="relative w-full flex justify-center items-center">
                            <BranchIcon className="absolute top-1/2 -translate-y-1/2 z-0 w-full h-auto text-gray-600" />
                            <div className="relative z-10 w-full flex justify-around">
                                <PipelineStage stage={PIPELINE_STAGES[2]} isParallel={true} />
                                <PipelineStage stage={PIPELINE_STAGES[3]} isParallel={true} />
                            </div>
                        </div>
                        
                        {/* Merge Point */}
                         <div className="relative w-full flex justify-center items-center h-24">
                            <MergeIcon className="absolute top-1/2 -translate-y-1/2 z-0 w-full h-auto text-gray-600" />
                        </div>
                        
                        <DoubleArrowIcon className="w-8 h-8 text-gray-500" />
                        
                        {/* Stages 4 & 5 */}
                        <PipelineStage stage={PIPELINE_STAGES[4]} />
                        <DoubleArrowIcon className="w-8 h-8 text-gray-500" />
                        <PipelineStage stage={PIPELINE_STAGES[5]} />
                    </div>
                </div>
            </main>

            <ChatPanel
                chatHistory={chatHistory}
                isLoading={isLoading}
                onSendMessage={handleSendMessage}
            />
        </div>
    );
};

export default App;
