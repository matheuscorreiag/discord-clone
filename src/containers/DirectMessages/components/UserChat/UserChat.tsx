import React from "react";
import { Username } from "../../../../common/components/Username";
import { UserPhoto } from "../../../../common/components/UserPhoto";

interface UserChatProps {
  id: string;
  username: string;
  imageUrl: string;
}

export const UserChat: React.FC<UserChatProps> = ({
  id,
  imageUrl,
  username,
}) => {
  return (
    <div
      className="
    flex
    flex-row
    gap-2
    text-zinc-400
    items-center
    hover:bg-zinc-700
    p-1
    w-full
    rounded-sm
    h-[40px]
    cursor-pointer
    "
    >
      <UserPhoto imageUrl={imageUrl} />

      <Username username={username} />
    </div>
  );
};
