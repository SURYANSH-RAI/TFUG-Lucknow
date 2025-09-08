import React from "react";
import './button.css';

export function Button({ 
  className = "", 
  variant = "default", 
  size = "default", 
  children,
  ...props 
}) {
  // Define the button variants and sizes
  const variants = {
    default: "bg-blue-600 hover:bg-blue-700 text-white",
    outline: "border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white",
    ghost: "bg-transparent hover:bg-gray-700 text-gray-300 hover:text-white",
  };
  
  const sizes = {
    default: "py-2 px-4",
    sm: "py-1 px-3 text-sm",
    lg: "py-3 px-6 text-lg",
    icon: "p-2"
  };
  
  const variantClass = variants[variant] || variants.default;
  const sizeClass = sizes[size] || sizes.default;
  
  return (
    <button
      className={`rounded-md font-medium transition-colors ${variantClass} ${sizeClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
