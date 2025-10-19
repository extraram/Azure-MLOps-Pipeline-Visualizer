
import React from 'react';
import { PipelineStageData } from '../types';
import TechnologyCard from './TechnologyCard';

interface PipelineStageProps {
    stage: PipelineStageData;
    isParallel?: boolean;
}

const PipelineStage: React.FC<PipelineStageProps> = ({ stage, isParallel = false }) => {
    const stageWidth = isParallel ? 'w-full max-w-sm' : 'w-full max-w-2xl';
    
    return (
        <div className={`${stageWidth} bg-azure-medium p-6 rounded-xl shadow-2xl border border-azure-light transform hover:scale-105 transition-transform duration-300`}>
            <div className={`w-full p-1 bg-gradient-to-r from-${stage.color} to-accent-cyan rounded-t-lg -mt-6 -mx-6 mb-4`}></div>
            <h3 className={`text-xl font-semibold text-${stage.color} mb-2`}>
                {stage.id}. {stage.title}
            </h3>
            <p className="text-gray-300 mb-4 text-sm">{stage.description}</p>
            <div className="flex flex-wrap gap-3">
                {stage.technologies.map((tech) => (
                    <TechnologyCard key={tech.name} technology={tech} />
                ))}
            </div>
        </div>
    );
};

export default PipelineStage;
