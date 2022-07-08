import { Divider } from "../../common/components/Divider";
import { ChannelIcon } from "./components/ChannelIcon";

export const Sidebar = () => {
  return (
    <div
      className="
    bg-[#202225]
     h-screen 
     w-[72px] flex 
     items-center 
     gap-2
     py-2
     flex-col
     absolute
     "
    >
      <ChannelIcon type="home" />

      <Divider type="horizontal" />
      <ChannelIcon type="plus" group="default" />
      <ChannelIcon type="download" group="default" />
      <ChannelIcon type="path" group="default" />
    </div>
  );
};
