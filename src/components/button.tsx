import React from "react";
import classNames from "classnames";

type ButtonSize = "sm" | "md" | "lg" | "xl";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  children: React.ReactNode;
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-6 py-2 text-xs",
  md: "px-4 py-2 text-sm",
  lg: "px-5 py-2 text-base",
  xl: "px-5 py-2 text-xl",
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
        "bg-[#EDB96F] cursor-pointer font-bold hover:bg-amber-50 text-black transition-colors duration-200",
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
