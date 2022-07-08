import { ChannelIcon } from "./components/ChannelIcon";

export const Sidebar = () => {
  return (
    <div
      className="
    bg-[#202225]
     h-screen 
     w-16 flex 
     items-center 
     gap-2
     py-2
     flex-col
     "
    >
      <ChannelIcon type="home" />
      <ChannelIcon type="plus" group="default" />
      <ChannelIcon type="download" group="default" />
      <ChannelIcon type="path" group="default" />
    </div>
  );
};
