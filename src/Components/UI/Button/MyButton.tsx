import React, { ButtonHTMLAttributes, FC, ReactNode } from "react";

interface IMyButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const MyButton: FC<IMyButton> = ({ children, ...props }) => {
  return <button {...props}>{children}</button>;
};

export default MyButton;
