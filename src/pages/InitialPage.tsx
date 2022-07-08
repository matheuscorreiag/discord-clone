import { ActiveChat } from "../containers/ActiveChat";
import { DirectMessages } from "../containers/DirectMessages";
import { Sidebar } from "../containers/Sidebar";

export const InitialPage = () => {
  return (
    <div
      className="
      relative
      h-screen
    "
    >
      <Sidebar />
      <DirectMessages />
      <ActiveChat />
      {/* <Header /> */}
    </div>
  );
};
