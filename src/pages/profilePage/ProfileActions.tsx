import React from "react";
import { Button } from "antd";

interface ProfileActionsProps {
  onEditProfile: () => void;
  onChangePassword: () => void;
}

const ProfileActions: React.FC<ProfileActionsProps> = ({ onEditProfile, onChangePassword }) => {
  return (
    <div className="mt-4">
      <Button className="bg-pink-400 text-white p-2 rounded-lg mr-4" onClick={onEditProfile}>
        Edit Profile
      </Button>
      <Button className="bg-pink-400 text-white p-2 rounded-lg" onClick={onChangePassword}>
        Change Password
      </Button>
    </div>
  );
};

export default ProfileActions;
