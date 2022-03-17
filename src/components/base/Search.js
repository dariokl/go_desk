import React from "react";
import Icon from "../base/Icon";

const Search = () => {
  return (
    <div className="relative mx-auto pt-2 ">
      <input
        className="h-10 
    
    rounded-lg 
    border-2 border-gray-700 bg-inherit 
    px-5
    text-sm 
    placeholder-black transition  
    duration-700 
    hover:w-full 
    hover:bg-white 
    hover:pr-16
    focus:outline-none"
        type="text"
        name="search"
      />
      <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
        <Icon name="IoIosSearch" size="16" />
      </button>
    </div>
  );
};

export default Search;
