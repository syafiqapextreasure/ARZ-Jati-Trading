import React from 'react';

interface ArzLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  light?: boolean;
}

export const ArzLogo: React.FC<ArzLogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
  light = true,
}) => {
  const iconSizes = {
    sm: 'w-9 h-11',
    md: 'w-12 h-14',
    lg: 'w-16 h-20',
  };

  const titleSizes = {
    sm: 'text-base font-semibold tracking-wider',
    md: 'text-xl font-bold tracking-wider',
    lg: 'text-2xl font-bold tracking-wider',
  };

  const subtitleSizes = {
    sm: 'text-[9px] tracking-widest',
    md: 'text-[10px] tracking-widest',
    lg: 'text-xs tracking-widest',
  };

  const strokeColor = light ? '#FFFFFF' : '#111111';
  const textColor = light ? 'text-white' : 'text-neutral-900';
  const subtextColor = light ? 'text-neutral-400' : 'text-neutral-600';

  return (
    <div className={`flex items-center gap-3.5 select-none ${className}`}>
      {/* Original ARZ BINA emblem SVG */}
      <svg
        viewBox="0 0 100 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${iconSizes[size]} shrink-0 transition-transform duration-200 hover:scale-[1.02]`}
        aria-label="ARZ BINA Logo"
      >
        {/* House Roof Gable Outer Lines */}
        <path
          d="M50 8 L94 44 L86 44 L50 16 L14 44 L6 44 Z"
          fill="none"
          stroke={strokeColor}
          strokeWidth="3.2"
          strokeLinejoin="miter"
        />
        {/* Inner Secondary Ridge Line */}
        <path
          d="M50 20 L84 46"
          stroke={strokeColor}
          strokeWidth="2.2"
          strokeLinecap="round"
        />

        {/* Stylized "ARZ" in House Silhouette */}
        {/* 'A' */}
        <path
          d="M20 70 L28 34 L36 70"
          stroke={strokeColor}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M23 56 L33 56"
          stroke={strokeColor}
          strokeWidth="2.8"
        />

        {/* 'R' */}
        <path
          d="M42 70 L42 34 L56 34 C63 34 65 41 65 47 C65 53 61 56 54 56 L42 56 M52 56 L64 70"
          stroke={strokeColor}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* 'Z' */}
        <path
          d="M68 36 L86 36 L70 68 L88 68"
          stroke={strokeColor}
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* "BINA" Box Outer Frame */}
        <rect
          x="12"
          y="76"
          width="76"
          height="22"
          stroke={strokeColor}
          strokeWidth="2.8"
          fill="none"
        />

        {/* "BINA" Inner Text */}
        <text
          x="50"
          y="92"
          textAnchor="middle"
          fill={strokeColor}
          fontSize="15"
          fontWeight="800"
          fontFamily="system-ui, -apple-system, sans-serif"
          letterSpacing="5"
        >
          BINA
        </text>

        {/* Registration Number KT0244929-D */}
        <text
          x="50"
          y="110"
          textAnchor="middle"
          fill={strokeColor}
          fontSize="7.5"
          fontWeight="600"
          letterSpacing="1"
          opacity="0.85"
          fontFamily="monospace"
        >
          KT0244929-D
        </text>
      </svg>

      {/* Brand Name & Trade Descriptor */}
      {showText && (
        <div className="flex flex-col text-left leading-tight">
          <span className={`font-bold uppercase tracking-wider ${titleSizes[size]} ${textColor}`}>
            ARZ JATI TRADING
          </span>
          <span className={`uppercase font-medium text-neutral-400 ${subtitleSizes[size]} ${subtextColor}`}>
            CONSTRUCTION · RENOVATION · REPAIR WORK
          </span>
        </div>
      )}
    </div>
  );
};
