import React from 'react';

const Card = ({ className, onClick, children }) => {
  return (
    <div
      onClick={onClick}
      className={`grid bg-[#f1f1f1] text-center h-[300px] content-center gap-[10px] cursor-pointer | transform-scale shadow rounded-lg p-3 ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
