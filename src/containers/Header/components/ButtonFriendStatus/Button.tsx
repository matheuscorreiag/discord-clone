import React from "react";

interface ButtonFriendStatusProps {
  type: "Available" | "All" | "Waiting" | "Blocked";
}

export const ButtonFriendStatus: React.FC<ButtonFriendStatusProps> = ({
  type,
}) => {
  return (
    <button
      className="
    hover:rounded-md
    hover:bg-zinc-700
    focus:rounded-md
    focus:bg-zinc-600
    cursor-pointer
    p-1
    transition-all
    duration-100
    ease-in-out
    min-w-[50px]
    "
    >
      <h1>{type}</h1>
    </button>
  );
};
