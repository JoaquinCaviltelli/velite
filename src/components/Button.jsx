import React from "react";

const Button = ({ text, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-[#FF9F1C] px-6 py-3 w-full rounded text-sm text-[#014034] font-semibold md:max-w-xs cursor-pointer hover:bg-[#ffb067] ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
