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
hover:text-gray-50
focus:text-gray-50
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

export const listItemCN = cntl`
flex 
justify-between 
p-3 
transition 
delay-200 
hover:bg-gray-50 
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
hover:bg-gradient-to-r 
hover:drop-shadow-2xl	
hover:shadow-none
shadow-lg
from-red-700 
to-transparent 
rounded-xl
group 
transition 
delay-200
h-120 
min-w-60
max-w-120
flex flex-col
justify-center
items-center 
relative
text-center
break-all
font-sans

`;

export const gridMenuContainerCN = cntl`
absolute 
top-0 h-1 
w-full 
rounded-lg 
bg-gradient-to-r 
from-gray-700 
to-transparent 
p-2 
group-hover:bg-none
`;

export const gridMenuButtonCN = cntl`
border-b-[1px] 
border-red-700 
text-sm 
transition 
delay-150 
ease-in-out 
hover:border-transparent 
hover:text-gray-50
`;
