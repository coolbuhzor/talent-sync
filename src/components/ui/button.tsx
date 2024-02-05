import React from "react";

const Button = (props: IButtonProps) => {
  const { children, className, primary, ...rest } = props;

  return (
    <button
      className={`${className} ${
        primary
          ? "bg-blue-700 text-white"
          : "border border-gray-400 bg-white text-gray-900"
      } font-semibold text-base font-inter rounded-[100px] outline-none`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
