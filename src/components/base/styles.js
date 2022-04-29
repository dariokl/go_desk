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
hover:bg-red-700
hover:bg-red-700

${
  isActive
    ? cntl`
      bg-red-700
      `
    : null
}
`;

export const ButtonCN = cntl`
overflow-hidden
rounded-lg
text-sm 
outline
outline-2
outline-gray-700
hover:bg-white
transition
duration-150
px-2
`;
