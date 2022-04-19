import cntl from "cntl";

export const searchCN = cntl`
h-10 
rounded-lg 
border-2 border-gray-700 bg-inherit 
px-5
text-sm 
placeholder-black transition  
duration-700 
hover:w-full 
hover:bg-white 
hover:pr-16
focus:outline-none
`;

export const searchButtonCN = cntl`
absolute 
right-0 
top-0 
mt-5 
mr-4
`;

export const navButtonsCN = (isActive) => cntl`
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

${
  isActive
    ? cntl`
      bg-orange-700
      `
    : null
}
`;

export const gridItemCN = cntl`
hover:bg-orange-700
rounded-xl
group 
transition 
delay-400
h-112 w-112 
relative 
flex flex-col 
place-content-center 
items-center
`;

export const gridMenuCN = cntl`
absolute
bg-gray-800
top-10
`;
