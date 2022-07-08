import { Plus } from "phosphor-react";

export const Title = () => {
  return (
    <div
      className="
  text-zinc-400
  text-xs
  font-bold

  flex
  flex-row
  w-full
  justify-between
  items-center
  "
    >
      MENSAGENS DIRETAS
      <Plus size={20} className="cursor-pointer" />
    </div>
  );
};
