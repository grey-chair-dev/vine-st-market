
import React from 'react';
import logoImage from '../logo.png';
import { BUSINESS_NAME } from '../constants';

interface RadishLogoProps {
  className?: string;
  size?: number;
  height?: number;
}

const RadishLogo: React.FC<RadishLogoProps> = ({ className = '', size = 24, height }) => {
  const maxSize = height ?? size;

  return (
    <img 
      src={logoImage} 
      alt={`${BUSINESS_NAME} logo`}
      className={className}
      style={{
        maxHeight: maxSize,
        maxWidth: maxSize * 0.55,
        width: 'auto',
        height: 'auto',
        objectFit: 'contain',
      }}
    />
  );
};

export default RadishLogo;
