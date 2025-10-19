
import React from 'react';
import { Technology } from '../types';

interface TechnologyCardProps {
    technology: Technology;
}

const TechnologyCard: React.FC<TechnologyCardProps> = ({ technology }) => {
    const Icon = technology.icon;
    return (
        <div className="flex items-center gap-2 bg-azure-light py-1 px-3 rounded-full text-xs text-gray-200 shadow-md">
            <Icon className="w-4 h-4" />
            <span>{technology.name}</span>
        </div>
    );
};

export default TechnologyCard;
