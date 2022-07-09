interface UserPhotoProps {
  username: string;
}

export const Username: React.FC<UserPhotoProps> = ({ username }) => {
  return <p className="text-sm font-medium">{username}</p>;
};
