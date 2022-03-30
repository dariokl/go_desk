import React from "react";
import { navButtonsCN } from "./styles";

const NavButtons = ({ buttons, onClick }) => {
  return (
    <div className="mt-6 flex items-center">
      <div
        className="inline-flex shadow-md hover:shadow-lg focus:shadow-lg"
        role="group"
      >
        {buttons.map((button) => (
          <button
            type="button"
            className={navButtonsCN(button.active)}
            key={button.name}
            onClick={() => onClick(button.value)}
          >
            {button.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default NavButtons;
