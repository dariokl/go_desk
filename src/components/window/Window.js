import React, { useState } from "react";
import { Rnd } from "react-rnd";
import { Renderer } from "../Renderer";

const Window = ({ name, item }) => {
  const [position, setPosition] = useState({
    width: 400,
    height: 200,
    x: 10,
    y: 10,
  });

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
      minWidth={400}
      minHeight={200}
      maxWidth={800}
      maxHeight={600}
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
        <Renderer config={item} />
      </div>
    </Rnd>
  );
};

export default Window;
