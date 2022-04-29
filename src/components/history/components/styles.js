import cntl from "cntl";

export const listContainerCN = cntl`
container 
mt-10 
flex 
justify-center
`;

export const listCN = cntl`
w-full
rounded-lg 
bg-inherit
`;

export const listDividerCN = cntl`
divide-y-2 
divide-gray-800
`;

export const listItemButtonCN = ({ isSaveButton }) => cntl`
group
h-6
w-10
flex
justify-center
items-center
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
duration-300 
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

export const listItemCN = cntl`
flex 
justify-between 
p-3 
transition 
delay-200 
hover:bg-white 
hover:shadow-lg
`;

export const gridContainerCN = cntl`
mt-20 
mb-10 
flex
flex-wrap
gap-2
justify-center
items-center
`;

export const gridItemCN = cntl`
flex-[1_1_100%]
hover:bg-red-700
rounded-xl
group 
transition 
delay-150
h-120 
min-w-60
max-w-120
flex flex-col 
items-center
justify-center
relative
text-center
break-all
`;
