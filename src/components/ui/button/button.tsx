import React from "react";
import clsx from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "danger" | "outline";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  size = "md",
  disabled = false,
  className = "",
  type = "button",
}) => {
  const base = "rounded-4xl font-medium focus:outline-none transition";

  const sizes = {
    sm: "text-sm px-3 py-1.5",
    md: "text-base px-4 py-2",
    lg: "text-lg px-5 py-3",
  };

const variants = {
  primary: "bg-blue-600 text-white hover:bg-blue-700",
  secondary: "bg-gray-600 text-white hover:bg-gray-700",
  danger: "bg-red-600  text-white hover:bg-red-700",
  outline: "border border-gray-600 text-gray-800 hover:bg-gray-100",
  green: "bg-green-600 text-white hover:bg-green-700",
  emerald: "bg-emerald-600 text-white hover:bg-emerald-700",
};


  const disabledStyle = "opacity-50 cursor-not-allowed";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(base, sizes[size], variants[variant], className, {
        [disabledStyle]: disabled,
      })}
    >
      {children}
    </button>
  );
};

export default Button;
