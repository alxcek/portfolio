import React from "react";
import clsx from "clsx";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const Button = ({
  children,
  onClick,
  size = "md",
  disabled = false,
  className = "",
  type = "button",
}: ButtonProps) => {
  const base =
    "rounded-md font-medium select-none bg-white/5 hover:bg-white/10 transition-colors duration-300 ease-in-out";

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-5 py-2.5 text-lg",
  };

  const disabledStyle = disabled ? "opacity-40 cursor-not-allowed" : "";

  const processChildren = (children: React.ReactNode) => {
    return React.Children.map(children, (child) => {
      if (React.isValidElement(child) && child.props.className?.includes('text-fill-animate')) {
        return React.cloneElement(child, {
          'data-text': child.props.children
        } as React.HTMLAttributes<HTMLElement>);
      }
      return child;
    });
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        "flex items-center justify-between group",
        base,
        sizes[size],
        disabledStyle,
        className
      )}
    >
      {processChildren(children)}
    </button>
  );
};

export { Button };
export default Button;