// export const stojce = (input: string[]) => {
//   return input.map((x) => x.toUpperCase());
// };

export const initializeWritable = () => {
  const writableDiv = document.getElementById("writableDiv");
  writableDiv.classList.add("stojce");
  console.log("initializeWritable() called");
};
