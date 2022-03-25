import React, { useCallback, useState } from "react";
import { windowConfig } from "../../utils/contants";
import { Rnd } from "react-rnd";
import { Renderer } from "../Renderer";

import Icon from "../base/Icon";

const Window = ({ item, onCloseWindow }) => {
  const [position, setPosition] = useState({
    width: 400,
    height: 400,
    x: 10,
    y: 10,
  });

  const minMaxWindow = useCallback(() => {
    const isMax = () => {
      if (
        position.height === windowConfig.maxHeight &&
        position.width === windowConfig.maxWidth
      ) {
        return true;
      }
      return false;
    };

    isMax()
      ? setPosition({
          ...position,
          width: windowConfig.minWidth,
          height: windowConfig.minHeight,
        })
      : setPosition({
          ...position,
          width: windowConfig.maxWidth,
          height: windowConfig.maxHeight,
        });
  }, [position]);

  return (
    <Rnd
      size={{ width: position.width, height: position.height }}
      position={{ x: position.x, y: position.y }}
      onDragStop={(e, d) => {
        setPosition({ ...position, x: d.x, y: d.y });
      }}
      onResizeStop={(e, direction, ref, delta, position) => {
        setPosition({
          width: ref.style.width,
          height: ref.style.height,
          ...position,
        });
      }}
      minWidth={windowConfig.minWidth}
      minHeight={windowConfig.min}
      maxWidth={windowConfig.maxWidth}
      maxHeight={windowConfig.maxHeight}
      bounds=".desk-container"
    >
      <div
        className="
  h-full w-full
  rounded-lg
  bg-gray-400
  bg-opacity-50
  p-1
  outline-white 
  backdrop-blur-lg
  backdrop-filter"
      >
        <div className="flex cursor-default justify-end">
          <Icon
            name="IoIosSquareOutline"
            size={26}
            onClick={minMaxWindow}
          ></Icon>
          <Icon
            name="IoIosClose"
            size={26}
            onClick={() => onCloseWindow(item.id)}
          ></Icon>
        </div>
        <Renderer config={item} />
      </div>
    </Rnd>
  );
};

export default Window;
