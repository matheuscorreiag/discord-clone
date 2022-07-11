import { File, Gif, Gift, PlusCircle, Smiley } from "phosphor-react";
import React from "react";
import { ActiveChatProps } from "../../ActiveChat";

export const ActiveChatInputbox: React.FC<ActiveChatProps> = ({username}) => {
  return (
    <div
      className="
    absolute 
    bottom-4
    bg-[#40444b] 
    rounded-lg
    h-11
    w-5/6
  flex
  items-center
  p-4
  gap-4
    "
    >
      <PlusCircle
        size={26}
        className="text-zinc-300 cursor-pointer hover:text-zinc-200"
        weight="fill"
      />
      <input className="bg-transparent w-full h-[40px] outline-none" placeholder={`Conversar em ${username}`} />

      <div className="flex gap-2">
        <Gift
          size={26}
          className="text-zinc-300 cursor-pointer hover:text-zinc-200"
          weight="fill"
        />

        <Gif
          size={26}
          className="text-zinc-300 cursor-pointer hover:text-zinc-200"
          weight="fill"
        />
        <File
          size={26}
          className="text-zinc-300 cursor-pointer hover:text-zinc-200"
          weight="fill"
        />
        <Smiley
          size={26}
          className="text-zinc-300 cursor-pointer hover:text-zinc-200"
          weight="fill"
        />
      </div>
    </div>
  );
};
