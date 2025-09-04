import React from 'react';

const Button = ({ children, onClick, className = '' }) => {
  const isLetsConnect = children === "LET'S CONNECT";

  const baseStyles =
    'cursor-pointer font-[Poppins] text-sm sm:text-base py-3 px-6 rounded-full transition duration-300 font-semibold shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2';

  const connectStyles = isLetsConnect
    ? 'bg-white text-pink-600 border border-pink-600 hover:bg-pink-600 hover:text-white'
    : 'bg-pink-600 text-white hover:bg-pink-500';

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        if (onClick) onClick();
      }}
      className={`${baseStyles} ${connectStyles} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
