import cntl from "cntl";

export const taskBarWrapperCN = cntl`
flex 
w-fit
items-center 
justify-center 
gap-3 
rounded-lg 
bg-gray-400 
bg-opacity-50
p-1
outline 
outline-1 
outline-white
backdrop-blur-lg 
backdrop-filter
`;

export const dividerCN = cntl`
h-8 w-px bg-white
`;

export const itemCN = cntl`
group
relative
flex 
h-12 
w-12 
transform 
items-center 
justify-center 
rounded-xl
border-none 
bg-gray-800 
transition 
transition duration-150 
ease-in-out 
hover:-translate-y-1 
hover:scale-100 
motion-reduce:transform-none
`;

export const itemNameCN = cntl`
invisible
absolute 
-top-8
rounded
bg-gray-800
p-0.5
group-hover:visible
`;
