import { User } from "phosphor-react";
import React from "react";

export const FriendTitle: React.FC = () => {
  return (
    <div
      className="
    flex
    flex-row
    items-center
    justify-center
    gap-1
    "
    >
      <User size={20} />
      <h1 className="font-bold">Friends</h1>
    </div>
  );
};
