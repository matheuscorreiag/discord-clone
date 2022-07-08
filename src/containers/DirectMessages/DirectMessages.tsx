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
    bg-opacity-50
    items-center
    flex-col
    gap-y-2
    "
    >
      <Searchbar />

      <div
        className="
      flex
      flex-col
      w-full
      gap-y-1
      overflow-y-scroll
      overflow-x-hidden
      p-3
      
      "
      >
        <Title />
        <UserChat />
        <UserChat />
        <UserChat />
        <UserChat />
        <UserChat />
        <UserChat />
        <UserChat />
        <UserChat />
        <UserChat />
        <UserChat />
        <UserChat />
        <UserChat />
        <UserChat />
        <UserChat />
        <UserChat />
        <UserChat />
        <UserChat />
        <UserChat />
        <UserChat />
        <UserChat />
        <UserChat />
        <UserChat />
        <UserChat />
        <UserChat />
        <UserChat />
        <UserChat />
        <UserChat />
      </div>
    </div>
  );
};
