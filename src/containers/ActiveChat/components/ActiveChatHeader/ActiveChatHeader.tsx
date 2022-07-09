import { At } from "phosphor-react";
import React from "react";
import { Divider } from "../../../../common/components/Divider";
import { ActiveChatIcons } from "../ActiveChatIcons";

export const ActiveChatHeader: React.FC = () => {
  return (
    <div
      className="
    h-[50px]
    flex
    items-center
    border-b-2
    border-zinc-800
    pl-[325px]    
   "
    >
      <div className="flex gap-2 w-2/4">
        <At className="text-zinc-400" size={26} />
        <h1 className="text-white text-base font-bold">Matheus</h1>
        <Divider type="vertical" />
      </div>
      <ActiveChatIcons />
    </div>
  );
};
