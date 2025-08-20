import React from "react";
import clsx from "clsx";

const Button = ({
  children,
  onClick,
  size = "md",
  disabled = false,
  className = "",
  type = "button",
}) => {
  const base =
    "rounded-md font-medium select-none bg-white/5 hover:bg-white/10 transition-colors duration-300 ease-in-out";
  
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-5 py-2.5 text-lg",
  };
  
  const disabledStyle = disabled ? "opacity-40 cursor-not-allowed" : "";

  const processChildren = (children) => {
    return React.Children.map(children, (child) => {
      if (React.isValidElement(child) && child.props.className?.includes('text-fill-animate')) {
        return React.cloneElement(child, {
          'data-text': child.props.children
        });
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

export default Button;