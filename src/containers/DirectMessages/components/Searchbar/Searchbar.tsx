export const Searchbar: React.FC = () => {
  return (
    <div
      className="
    h-[50px]
    w-full
    border-b-2
    border-zinc-800
    bg-[#282b30]
    absolute
    p-2
    flex
    items-center
    justify-center
    "
    >
      <button
        className="
      bg-black 
      rounded-md 
      outline-none 
      text-zinc-400
      text-sm 
      bg-opacity-50 
      h-[25px] 
      w-full 
      "
      >
        Find or start a chat
      </button>
    </div>
  );
};
