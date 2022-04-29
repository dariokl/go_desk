import React from "react";

import { ButtonCN } from "./styles";

const Button = ({ text, loading, onClick }) => {
  return (
    <button className={ButtonCN} onClick={onClick}>
      <span>{text}</span>
    </button>
  );
};

export default Button;
