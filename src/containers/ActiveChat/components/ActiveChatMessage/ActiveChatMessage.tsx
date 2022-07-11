import React from "react";
import { UserPhoto } from "../../../../common/components/UserPhoto";

interface ActiveChatMessageProps {
  username: string;
  imageUrl: string;
}

export const ActiveChatMessage: React.FC<ActiveChatMessageProps> = ({
  imageUrl,
  username,
}) => {
  return (
    <div className="w-full m-1 flex gap-2 hover:bg-zinc-500 hover:bg-opacity-40 items-center">
      <UserPhoto imageUrl={imageUrl} size={7} />

      <div className="flex flex-col">
        <span className="font-semibold">{username}</span>
        <h1 className="font-extralight">hello adsadasd</h1>
      </div>
    </div>
  );
};
