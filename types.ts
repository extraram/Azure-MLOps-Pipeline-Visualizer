
import React from 'react';

export interface Technology {
    name: string;
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export interface PipelineStageData {
    id: number;
    title: string;
    description: string;
    technologies: Technology[];
    color: string;
}

export interface ChatMessage {
    sender: 'user' | 'ai';
    text: string;
}
