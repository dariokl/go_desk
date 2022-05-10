import React from "react";
import Icon from "../Icon";

import { inputCN, inputLabelCN } from "./styles";

const Input = ({ id, type, placeholder, required, labelColor }) => {
  return (
    <>
      <label for={id} className={inputLabelCN(labelColor)}>
        Your {type}
      </label>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <Icon />
        </div>
        <input
          type={type}
          id={id}
          className={inputCN}
          placeholder={placeholder}
          required={required}
        />
      </div>
    </>
  );
};

export default Input;
