import React from "react";

interface ButtonProps {
  onClick: () => void;
  children: string;
  className?: string;
}
export default function Button({ onClick, children, className }: ButtonProps) {
  return (
    <button
      className={`${className} min-w-[100px] h-[40px] rounded transition-colors duration-300 ease-in-out my-[10px] bg-custom-green border-0 hover:bg-custom-light-green text-white hover:text-custom-green`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
