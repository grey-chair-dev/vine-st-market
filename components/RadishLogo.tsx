
import React from 'react';
import logoImage from '../logo.png';

interface RadishLogoProps {
  className?: string;
  size?: number;
}

const RadishLogo: React.FC<RadishLogoProps> = ({ className = "", size = 24 }) => {
  return (
    <img 
      src={logoImage} 
      alt="Harvest Market Logo"
      className={className}
      style={{ maxWidth: size, maxHeight: size, width: 'auto', height: 'auto', objectFit: 'contain' }}
    />
  );
};

export default RadishLogo;

