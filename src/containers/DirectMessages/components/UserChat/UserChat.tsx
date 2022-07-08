import React from "react";
import { UserPhoto } from "../../../../common/components/UserPhoto";

export const UserChat: React.FC = () => {
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
      <UserPhoto />
      <p className="text-sm font-medium">Matheus</p>
    </div>
  );
};
