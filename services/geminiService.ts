
import { GoogleGenAI } from "@google/genai";
import type { ChatMessage } from '../types';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
    throw new Error("API_KEY environment variable is not set.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const systemInstruction = `
You are a world-class expert in MLOps and Azure Machine Learning.
You are acting as an AI assistant for a web application that visualizes a predictive analytics pipeline.
Your purpose is to answer user questions about this specific pipeline.
Do not go off-topic. All your answers must be in the context of the provided pipeline architecture.
The pipeline stages are:
1.  **Data Ingestion**: Using Azure Synapse Analytics as the data warehouse.
2.  **Data Preprocessing**: Using Azure Databricks with Python/Pandas for data cleansing and feature engineering.
3.  **Model Training (Parallel)**:
    a. **Baseline Model**: Azure AutoML trains and tunes various algorithms.
    b. **Custom Model**: A Python script with Scikit-learn trains a specialized model.
    c. **Experiment Tracking**: MLflow is used for tracking parameters, metrics, and artifacts for both training runs.
4.  **Model Validation & Registration**: The best model is evaluated against a validation set. If its accuracy is > 90%, it's registered in the Azure ML Model Registry.
5.  **Model Deployment**: The registered model is deployed as a real-time REST API via Azure ML Managed Endpoints.

The key features are end-to-end automation and parallel processing in the training stage to reduce runtime.

Keep your answers concise, informative, and easy to understand for someone familiar with data science concepts.
Format your responses using markdown for better readability (e.g., use bullet points, bold text).
`;

export const callGemini = async (prompt: string, history: ChatMessage[]): Promise<string> => {
    try {
        const chat = ai.chats.create({
            model: 'gemini-2.5-pro',
            config: {
                systemInstruction: systemInstruction,
            },
            history: history
                .filter(msg => msg.sender === 'user' ? { role: 'user', parts: [{ text: msg.text }] } : { role: 'model', parts: [{ text: msg.text }] })
                .map(msg => (msg.sender === 'user' ? { role: 'user', parts: [{ text: msg.text }] } : { role: 'model', parts: [{ text: msg.text }] }))
        });

        const response = await chat.sendMessage({ message: prompt });
        return response.text;
    } catch (error) {
        console.error("Gemini API call failed:", error);
        return "An error occurred while communicating with the AI. Please check the console for details.";
    }
};
