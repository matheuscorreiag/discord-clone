import { useState } from "react";
import { ActiveChat } from "../containers/ActiveChat";
import { DirectMessages } from "../containers/DirectMessages";
import { UserChatProps } from "../containers/DirectMessages/DirectMessages";
import { Sidebar } from "../containers/Sidebar";

export const InitialPage = () => {
  const [activeChat, setActiveChat] = useState<UserChatProps>({
    username: "",
    imageUrl: "",
  });

  const handleActiveChatChange = (userChat: UserChatProps) => {
    setActiveChat(userChat);
  };

  return (
    <div
      className="
      relative
      h-screen
    "
    >
      <Sidebar />
      <DirectMessages activeUser={handleActiveChatChange} />
      <ActiveChat
        username={activeChat.username}
        imageUrl={activeChat.imageUrl}
      />
      {/* <Header /> */}
    </div>
  );
};
