import React from "react";
import * as IosIcons from "react-icons/io";
import * as WeatherIcons from "react-icons/bs";

import { iconConfig } from "../../utils/contants";

const Icon = ({ name, size, iconClass, onClick }) => {
  const DefaultIcon = IosIcons[iconConfig.name];

  const Icon = IosIcons[name] || WeatherIcons[name];

  return Icon ? (
    <Icon size={size} onClick={onClick} className={iconClass} />
  ) : (
    <DefaultIcon size={iconConfig.size} />
  );
};

export default Icon;
