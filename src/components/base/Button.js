import React from "react";

import { ButtonCN } from "./styles";

const Button = ({ text, loading, onClick, hoverColor = "white" }) => {
  return (
    <button className={ButtonCN(hoverColor)} onClick={onClick}>
      <span>{text}</span>
    </button>
  );
};

export default Button;
