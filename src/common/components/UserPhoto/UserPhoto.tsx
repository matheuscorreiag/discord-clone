import React from "react";

interface UserPhotoProps {
  imageUrl: string;
}

export const UserPhoto: React.FC<UserPhotoProps> = ({ imageUrl }) => {
  return (
    <div
      className="
  bg-red-600
  rounded-full
  w-7
  h-7
  overflow-hidden
  "
    >
      <img src={imageUrl} alt="user-photo" />
    </div>
  );
};
