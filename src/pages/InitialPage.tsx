import { useState } from "react";
import { ActiveChat } from "../containers/ActiveChat";
import { DirectMessages } from "../containers/DirectMessages";
import { Sidebar } from "../containers/Sidebar";

export const InitialPage = () => {
  const [activeChat, setActiveChat] = useState("");

  const handleActiveChatChange = (chat: string) => {
    setActiveChat(chat);
  };

  return (
    <div
      className="
      relative
      h-screen
    "
    >
      <Sidebar />
      <DirectMessages activeChatUsername={handleActiveChatChange} />
      <ActiveChat username={activeChat} />
      {/* <Header /> */}
    </div>
  );
};
