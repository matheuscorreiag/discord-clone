import React from "react";

interface UserPhotoProps {
  imageUrl: string;
  size?: number;
}

export const UserPhoto: React.FC<UserPhotoProps> = ({ imageUrl, size }) => {
  return (
    <div
      className={` 
      rounded-full
      w-7
      h-7
      overflow-hidden`}
    >
      <img src={imageUrl} alt="user-photo" />
    </div>
  );
};
