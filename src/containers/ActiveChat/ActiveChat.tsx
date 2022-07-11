import React from "react";
import { ActiveChatHeader } from "./components/ActiveChatHeader";
import { ActiveChatInputbox } from "./components/ActiveChatInputbox";
import { ActiveChatMessage } from "./components/ActiveChatMessage";

export interface ActiveChatProps {
  username: string;
  imageUrl: string;
}

export const ActiveChat: React.FC<ActiveChatProps> = ({
  username,
  imageUrl,
}) => {
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
      <div
        className="
    flex 
    flex-col
    h-full
    justify-end
    pl-4
    overflow-y-scroll
    overflow-x-hidden
    "
      >
        <ActiveChatMessage imageUrl={imageUrl} username={username} />
        <ActiveChatMessage imageUrl={imageUrl} username={username} />
        <ActiveChatMessage imageUrl={imageUrl} username={username} />
        <ActiveChatMessage imageUrl={imageUrl} username={username} />
      </div>
      <ActiveChatInputbox username={username} />
    </div>
  );
};
