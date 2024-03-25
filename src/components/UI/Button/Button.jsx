import React from 'react';
import "./Button.css"

const Button = ({className,  onClick, text }) => {
  return (
    <button className={className} onClick={onClick}>{text}</button>
  );
};

export default Button;