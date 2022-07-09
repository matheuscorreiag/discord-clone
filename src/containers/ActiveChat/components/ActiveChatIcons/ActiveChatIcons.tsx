import {
  PhoneCall,
  PushPin,
  Question,
  Tray,
  UserCirclePlus,
  VideoCamera,
} from "phosphor-react";
import React from "react";
import { ActiveChatSearchbox } from "../ActiveChatSearchbox";

export const ActiveChatIcons: React.FC = () => {
  return (
    <div className="flex w-2/4 justify-end gap-3 pr-8 text-zinc-400">
      <PhoneCall
        size={25}
        weight="fill"
        className="cursor-pointer hover:text-zinc-300"
      />
      <VideoCamera
        size={25}
        weight="fill"
        className="cursor-pointer hover:text-zinc-300"
      />
      <PushPin
        size={25}
        weight="fill"
        className="cursor-pointer hover:text-zinc-300"
      />
      <UserCirclePlus
        size={25}
        weight="fill"
        className="cursor-pointer hover:text-zinc-300"
      />
      <ActiveChatSearchbox />
      <Tray
        size={25}
        weight="fill"
        className="cursor-pointer hover:text-zinc-300"
      />
      <Question
        size={25}
        weight="fill"
        className="cursor-pointer hover:text-zinc-300"
      />
    </div>
  );
};
