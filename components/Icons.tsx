
import React from 'react';

export const AzureIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.43 2.02l-8.38 3.52L12.43 12l8.38-6.46-8.38-3.52zM4 6.84l8.43 6.51V22l-8.43-3.51V6.84zm16.81-1.33L12.43 12v10l8.38-3.51V5.51z" />
    </svg>
);

export const DatabricksIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
);

export const PythonIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15.58v-2.09c-2.6-.2-4.2-1-4.2-3.44 0-2.14 1.5-3.4 4.2-3.4h2.2v2.1h-2.2c-1.6 0-2.1.6-2.1 1.34s.5 1.34 2.1 1.34h2.2v4.84H11zm5.8-5.78c0-2.14-1.5-3.4-4.2-3.4h-2.2v2.1h2.2c1.6 0 2.1.6 2.1 1.34s-.5 1.34-2.1 1.34h-2.2v2.09h2.2c2.7 0 4.2-1.26 4.2-3.44z" />
    </svg>
);

export const ScikitLearnIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="3" />
        <line x1="12" y1="2" x2="12" y2="5" />
        <line x1="12" y1="19" x2="12" y2="22" />
        <line x1="2" y1="12" x2="5" y2="12" />
        <line x1="19" y1="12" x2="22" y2="12" />
    </svg>
);

export const MLFlowIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
);

export const SynapseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
     <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="3" y1="9" x2="21" y2="9"></line>
        <line x1="9" y1="21" x2="9" y2="9"></line>
    </svg>
);

export const RegistryIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
        <line x1="12" y1="22.08" x2="12" y2="12"></line>
    </svg>
);

export const EndpointIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v2" />
        <path d="M6 16v2a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-2" />
        <path d="M12 16v-8" />
        <path d="M12 8h-2a2 2 0 1 0 0 4h2" />
        <path d="M12 8h2a2 2 0 1 1 0 4h-2" />
    </svg>
);

export const DoubleArrowIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 5v14" />
        <path d="m19 12-7 7-7-7" />
    </svg>
);

export const BranchIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} viewBox="0 0 100 50" preserveAspectRatio="none">
        <path d="M50 0 V15 C50 25, 20 25, 20 35 V50" fill="none" stroke="currentColor" strokeWidth="1" />
        <path d="M50 0 V15 C50 25, 80 25, 80 35 V50" fill="none" stroke="currentColor" strokeWidth="1" />
    </svg>
);

export const MergeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
     <svg {...props} viewBox="0 0 100 50" preserveAspectRatio="none">
        <path d="M20 0 V15 C20 25, 50 25, 50 35 V50" fill="none" stroke="currentColor" strokeWidth="1" />
        <path d="M80 0 V15 C80 25, 50 25, 50 35 V50" fill="none" stroke="currentColor" strokeWidth="1" />
    </svg>
);

export const SendIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="22" y1="2" x2="11" y2="13" />
        <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
);

export const BotIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 8V4H8" />
        <rect x="4" y="12" width="16" height="8" rx="2" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
        <path d="M12 18v-2" />
        <path d="M12 8a4 4 0 0 1-4-4" />
    </svg>
);

export const UserIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
    </svg>
);

export const ChevronDownIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
);

export const ChevronUpIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="18 15 12 9 6 15"></polyline>
    </svg>
);
