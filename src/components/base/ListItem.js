import React from "react";

const ListItem = ({ item }) => {
  return (
    <li className="flex justify-between p-3 transition delay-500 hover:bg-white hover:shadow-lg">
      <div className="flex justify-between">
        <span> {item.name}</span>
        <div className="flex"></div>
      </div>
    </li>
  );
};

export default ListItem;
