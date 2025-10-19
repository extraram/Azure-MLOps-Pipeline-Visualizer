
import { PipelineStageData } from './types';
import { SynapseIcon, DatabricksIcon, PythonIcon, ScikitLearnIcon, MLFlowIcon, RegistryIcon, EndpointIcon, AzureIcon } from './components/Icons';

export const PIPELINE_STAGES: PipelineStageData[] = [
    {
        id: 1,
        title: "Data Ingestion",
        description: "Large-scale raw data is ingested from Azure Synapse, serving as the primary data warehouse.",
        technologies: [
            { name: "Azure Synapse Analytics", icon: SynapseIcon }
        ],
        color: "accent-cyan",
    },
    {
        id: 2,
        title: "Data Preprocessing & Feature Engineering",
        description: "A Databricks notebook performs complex data cleansing, transformation, and feature engineering using Python and Pandas.",
        technologies: [
            { name: "Azure Databricks", icon: DatabricksIcon },
            { name: "Python & Pandas", icon: PythonIcon },
        ],
        color: "accent-cyan",
    },
    {
        id: 3,
        title: "Baseline Model (AutoML)",
        description: "Azure AutoML automatically trains and tunes a variety of models to find a high-performing baseline.",
        technologies: [
            { name: "Azure AutoML", icon: AzureIcon },
            { name: "MLflow", icon: MLFlowIcon }
        ],
        color: "accent-orange",
    },
    {
        id: 4,
        title: "Custom Model (Scikit-learn)",
        description: "A custom Python script trains a specialized model using Scikit-learn for more tailored solutions.",
        technologies: [
            { name: "Scikit-learn", icon: ScikitLearnIcon },
            { name: "MLflow", icon: MLFlowIcon }
        ],
        color: "accent-orange",
    },
    {
        id: 5,
        title: "Model Validation & Registration",
        description: "The best performing model is evaluated. If it meets the performance threshold (e.g., Accuracy > 90%), it's registered in the Azure ML Model Registry.",
        technologies: [
            { name: "Azure ML Model Registry", icon: RegistryIcon }
        ],
        color: "accent-green",
    },
    {
        id: 6,
        title: "Model Deployment",
        description: "The registered model is automatically deployed as a scalable, real-time REST API using Azure ML Managed Endpoints.",
        technologies: [
            { name: "Azure ML Endpoints", icon: EndpointIcon }
        ],
        color: "accent-green",
    },
];
