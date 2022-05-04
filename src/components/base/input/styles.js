import cntl from "cntl";

export const inputLabelCN = (color) => cntl`
mb-2 
block 
text-sm 
font-medium 
${
  color
    ? cntl`
        text-${color}-50
        `
    : `text-black`
}
`;

export const inputCN = cntl`
 block
 my-4
 w-full 
 rounded-lg 
 border-2 
 border-gray-300 
 bg-gray-50 
 p-2.5 pl-10 
 text-sm 
 text-gray-50 
 focus:border-red-700 
 focus:outline-none
`;
