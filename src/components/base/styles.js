import cntl from "cntl";

export const searchCN = cntl`
h-10 
rounded-lg 
border-2 border-gray-700 bg-inherit 
px-5
text-sm 
placeholder-black transition  
duration-700 
focus:w-full 
focus:bg-gray-50 
focus:pr-16
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
text-gray-50 
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

export const ButtonCN = (hoverColor) => cntl`
rounded-lg
text-sm 
outline
outline-1
outline-gray-700
transition
duration-150
hover:text-gray-50
cursor-pointer
p-2
${
  hoverColor
    ? cntl`
        hover:bg-${hoverColor}-700
        `
    : `hover:bg-gray-50`
}`;
