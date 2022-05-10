import React, { useCallback, useState } from "react";
import { windowConfig } from "../../utils/contants";
import { Rnd } from "react-rnd";
import { Renderer } from "../Renderer";

import Icon from "../base/Icon";

import { windowCN, windowIconWrapperCN } from "./styles";

const Window = ({ item, onCloseWindow }) => {
  const [position, setPosition] = useState({
    width: 400,
    height: 400,
    x: 0,
    y: 0,
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
      minHeight={windowConfig.minHeight}
      maxWidth={windowConfig.maxWidth}
      maxHeight={windowConfig.maxHeight}
      bounds=".desk-container"
    >
      <div className={windowCN}>
        <div className={windowIconWrapperCN}>
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
