import React, { useState } from "react";

export const ActiveChatSearchbox: React.FC = () => {
  const [isSearching, setIsSearching] = useState(false);

  return (
    <input
      className={`
      outline-none
     bg-[#282b30] 
     text-zinc-300
      rounded-md
      px-2
      ${isSearching ? "w-72" : "w-36"}
      transition-all
      duration-200
      ease-in-out
      `}
      onFocus={() => setIsSearching(true)}
      onBlur={() => setIsSearching(false)}
      // onClick={() => setIsSearching(true)}
      placeholder="Search"
    />
  );
};
