import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { Searchbar } from "./components/Searchbar";
import { Title } from "./components/Title";
import { UserChat } from "./components/UserChat";

interface UserProps {
  username: string;
  imageUrl: string;
  id: string;
}

interface DirectMessagesProps {
  activeChatUsername: (username: string) => void;
}

export const DirectMessages: React.FC<DirectMessagesProps> = ({
  activeChatUsername,
}) => {
  const [users, setUsers] = useState<UserProps[]>([]);

  useEffect(() => {
    api.get("/users").then((response) => {
      setUsers(response.data);
    });
  }, []);

  return (
    <div
      className="
    w-[240px]
    h-screen
    absolute
    mx-[72px]
    flex
    bg-[#282b30]
    bg-opacity-50
    items-center
    flex-col
    gap-y-2
    "
    >
      <Searchbar />

      <div
        className="
      flex
      flex-col
      w-full
      gap-y-1
      overflow-y-scroll
      overflow-x-hidden
      p-3
      
      "
      >
        <Title />
        {users.map((user) => {
          return (
            <div onClick={() => activeChatUsername(user.username)}>
              <UserChat
                id={user.id}
                imageUrl={user.imageUrl}
                username={user.username}
                key={user.id}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
