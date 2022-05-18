import React, { useState, useCallback } from "react";
import * as IosIcons from "react-icons/io";
import * as WeatherIcons from "react-icons/bs";

import { IconContext } from "react-icons";

import { iconConfig } from "../../utils/contants";

const Icon = ({ name, size, iconClass, onClick, iconColor = "white" }) => {
  const DefaultIcon = IosIcons[iconConfig.name];
  const Icon = IosIcons[name] || WeatherIcons[name];

  return (
    <IconContext.Provider value={{ color: iconColor }}>
      {Icon ? (
        <IconContext.Provider value={{ color: iconColor }}>
          <Icon size={size} onClick={onClick} className={iconClass} />
        </IconContext.Provider>
      ) : (
        <DefaultIcon size={iconConfig.size} />
      )}
    </IconContext.Provider>
  );
};

export default Icon;
