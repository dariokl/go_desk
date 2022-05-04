import React from "react";
import Icon from "../Icon";

import { inputCN, inputLabelCN } from "./styles";

const Input = ({ id, type, placeholder, required, labelColor }) => {
  console.log(labelColor);
  return (
    <>
      <label for={id} className={inputLabelCN(labelColor)}>
        Your {type}
      </label>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <svg
            class="h-5 w-5 text-gray-700 "
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
          </svg>
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
