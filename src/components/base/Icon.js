import React from "react";
import * as IosIcons from "react-icons/io";

import { iconConfig } from "../../utils/contants";

const Icon = ({ name, size, onClick }) => {
  const DefaultIcon = IosIcons[iconConfig.name];

  const Icon = IosIcons[name];

  return Icon ? (
    <Icon size={size} onClick={onClick} />
  ) : (
    <DefaultIcon size={iconConfig.size} />
  );
};

export default Icon;
