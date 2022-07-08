import React from "react";
import { Searchbar } from "./components/Searchbar";
import { Title } from "./components/Title";
import { UserChat } from "./components/UserChat";

export const DirectMessages: React.FC = () => {
  return (
    <div
      className="
    w-[240px]
    h-screen
    absolute
    mx-[72px]
    flex
    bg-[#282b30]
    items-center
    flex-col
    p-3
    gap-y-2
    "
    >
      <Searchbar />
      <Title />

      <div
        className="
      flex
      flex-col
      w-full
      gap-1
      overflow-y-scroll
      overflow-x-hidden
      "
      >
        <UserChat />
        <UserChat />
      </div>
    </div>
  );
};
