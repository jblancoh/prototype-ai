import React from 'react';

const LogoVercel = ({ className = '', ...props }) => {
  return (
    <svg 
      data-testid="geist-icon" 
      height={props.height || 16} 
      stroke-linejoin="round" 
      viewBox="0 0 16 16" 
      width={props.width || 16} 
      style={{color: props.color || "currentColor"}}
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M8 1L16 15H0L8 1Z" fill="currentColor"></path>
    </svg>
  );
};

export default LogoVercel;
