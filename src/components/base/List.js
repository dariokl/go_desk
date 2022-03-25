import React from "react";
import ListItem from "./ListItem";

const List = ({ items }) => {
  return (
    <div className="container mx-auto mt-10 flex justify-center">
      <div className="w-5/6 rounded-lg bg-inherit ">
        <ul className="divide-y-2 divide-gray-800 ">
          {items.map((item) => (
            <ListItem item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default List;
