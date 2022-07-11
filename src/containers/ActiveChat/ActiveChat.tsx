import React from "react";
import { ActiveChatHeader } from "./components/ActiveChatHeader";
import { ActiveChatInputbox } from "./components/ActiveChatInputbox";

export interface ActiveChatProps {
  username: string;
}

export const ActiveChat: React.FC<ActiveChatProps> = ({ username }) => {
  return (
    <div
      className="
    bg-[#36393e]
      h-full
      text-white
      flex
      flex-col
    pl-[325px]    

    "
    >
      <ActiveChatHeader username={username} />
      <ActiveChatInputbox username={username} />
    </div>
  );
};
