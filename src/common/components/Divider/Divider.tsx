import React from "react";

interface DividerProps {
  type: "horizontal" | "vertical";
}

export const Divider: React.FC<DividerProps> = ({ type }) => {
  return (
    <div
      // className={`${type === "vertical" ? "flex-col" : "flex-row"}'
      // bg-zinc-400 w-full h-2 flex
      // `}
      className={`
      flex bg-zinc-600
      ${type === "vertical" ? "min-w-1 w-[1px] h-6" : "min-h-1 h-[1px] w-6"}
      `}
    ></div>
  );
};
