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

export const listContainerCN = cntl`
container 
mx-auto 
mt-10 
flex 
justify-center
`;

export const listCN = cntl`
w-5/6 
rounded-lg 
bg-inherit
`;

export const listDividerCN = cntl`
divide-y-2 
divide-gray-800
`;

export const listItemCN = cntl`
flex 
justify-between 
p-3 
transition 
delay-200 
hover:bg-white 
hover:shadow-lg
`;

export const listItemButtonCN = ({ isSaveButton }) => cntl`
inline-block 
rounded-sm
px-1 py-1 
bg-inherit
text-black 
font-medium 
text-xs 
leading-tight 
hover:text-white
focus:text-white
focus:outline-none 
focus:ring-0 
transition 
duration-150 
ease-in-out

${
  isSaveButton
    ? cntl`
    active:bg-green-800 
    focus:bg-green-700 
    hover:bg-green-700 
      `
    : cntl`
    active:bg-red-800 
    focus:bg-red-700 
    hover:bg-red-700 
    
    `
}
`;
