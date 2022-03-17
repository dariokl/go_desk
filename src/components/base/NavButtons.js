import React from "react";

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
            className={`
          inline-block 
          bg-gray-800 px-6 
          py-2.5 
          text-xs 
          font-medium 
          uppercase 
          leading-tight 
          text-white 
          transition 
          duration-150 
          ease-in-out 
          ease-in-out 
          hover:bg-orange-700
          hover:bg-orange-700
          ${button.active ? "bg-orange-700" : null}
          `}
            key={button.name}
            onClick={() => onClick(button.name)}
          >
            {button.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default NavButtons;
