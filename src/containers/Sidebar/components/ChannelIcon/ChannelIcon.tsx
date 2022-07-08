import { DiscordLogo, Download, Path, Plus } from "phosphor-react";

interface ChannelIconProps {
  type: string;
  group?: string;
}

export const ChannelIcon: React.FC<ChannelIconProps> = ({ type, group }) => {
  return (
    <div
      className={`  
    rounded-full 
    bg-[#36393f] 
    w-[48px] 
    h-[48px] 
    flex 
    items-center 
    justify-center
    hover:rounded-xl
    transition-all
    duration-100
    ease-in-out
    text-white
    cursor-pointer
    ${type === "home" && "hover:bg-blue-600"}
    ${group && "text-green-600 hover:bg-green-600 hover:text-white "}
    `}
    >
      {type === "channel" && <div> </div>}
      {type === "plus" && <Plus size={24} />}
      {type === "download" && <Download size={24} />}
      {type === "path" && <Path size={24} />}
      {type === "home" && <DiscordLogo size={32} weight="fill" />}
    </div>
  );
};
