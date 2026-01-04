import React from "react";
import classNames from "classnames";

type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  children: React.ReactNode;
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-6 py-3 text-xs",
  md: "px-4 py-2 text-sm",
  lg: "px-5 py-3 text-base",
};

export const Button: React.FC<ButtonProps> = ({
  size = "md",
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={classNames(
        "bg-[#EDB96F] cursor-pointer text-black uppercase transition-colors duration-200 font-medium",
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
