import { DirectMessages } from "../containers/DirectMessages";
import { Sidebar } from "../containers/Sidebar";

export const InitialPage = () => {
  return (
    <div
      className="relative
    bg-gray-500
    "
    >
      <Sidebar />
      <DirectMessages />
      {/* <Header /> */}
    </div>
  );
};
