import React from 'react';
import originalLogo from '../assets/brand/arz-original-logo.jpg';
interface ArzLogoProps { className?: string; size?: 'sm'|'md'|'lg'; showText?: boolean; light?: boolean; }
export const ArzLogo: React.FC<ArzLogoProps> = ({className='',size='md',showText=true,light=true}) => (
<span className={`brand brand--${size} ${light?'':'brand--dark'} ${className}`}>
<span className="brand-emblem" role="img" aria-label="Logo asal ARZ BINA" style={{backgroundImage:`url(${originalLogo})`}} />
{showText && <span className="brand-copy"><span className="brand-name">ARZ JATI TRADING</span><span className="brand-tagline">CONSTRUCTION | RENOVATION | REPAIR WORK</span></span>}
</span>);
