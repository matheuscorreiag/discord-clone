import { Divider } from "../../common/components/Divider";
import { ButtonFriendStatus } from "./components/ButtonFriendStatus";
import { FriendTitle } from "./components/FriendTitle";

export const Header = () => {
  return (
    <div
      className="
    bg-[#202225]
    text-white
    h-12
    flex
    items-center
    px-6    
    gap-2
    "
    >
      <FriendTitle />
      <Divider type="vertical" />
      <ButtonFriendStatus type="Available" />
      <ButtonFriendStatus type="All" />
      <ButtonFriendStatus type="Waiting" />
      <ButtonFriendStatus type="Blocked" />
    </div>
  );
};
