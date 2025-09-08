import React from 'react';

export function TeamIcon({ className = "h-4 w-4" }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      {/* Person on the left */}
      <circle cx="8" cy="7" r="3" />
      <path d="M5 14c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v1h-6v-1Z" />
      
      {/* Person on the right */}
      <circle cx="16" cy="7" r="3" />
      <path d="M13 14c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v1h-6v-1Z" />
      
      {/* Person in front (slightly lower) */}
      <circle cx="12" cy="12" r="3" />
      <path d="M9 19c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v1H9v-1Z" />
    </svg>
  );
}
