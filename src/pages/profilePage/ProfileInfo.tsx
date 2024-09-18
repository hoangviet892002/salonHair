import React from "react";
import { Input, Select } from "antd";

interface ProfileInfoProps {
  fullName: string;
  username: string;
  email: string;
  phone: string;
  gender: string;
  onChangeFullName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeUsername: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangePhone: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeGender: (value: string) => void;
  isEditing: boolean;  // Add this prop
}

const ProfileInfo: React.FC<ProfileInfoProps> = ({
  fullName,
  username,
  email,
  phone,
  gender,
  onChangeFullName,
  onChangeUsername,
  onChangeEmail,
  onChangePhone,
  onChangeGender,
  isEditing,  // Use this prop
}) => {
  const inputStyle = {
    backgroundColor: '#E3D9C7',
    color: '#86664B',
    borderColor: '#E3D9C7',
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label className="text-[#86664B] text-lg">Full Name</label>
          <Input
            value={fullName}
            onChange={onChangeFullName}
            style={inputStyle}
            placeholder="Full Name"
            disabled={!isEditing}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-[#86664B] text-lg">Username</label>
          <Input
            value={username}
            onChange={onChangeUsername}
            style={inputStyle}
            placeholder="Username"
            disabled={!isEditing}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-[#86664B] text-lg">Email</label>
          <Input
            value={email}
            onChange={onChangeEmail}
            style={inputStyle}
            placeholder="Email"
            disabled={!isEditing}
          />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label className="text-[#86664B] text-lg">Phone</label>
          <Input
            value={phone}
            onChange={onChangePhone}
            style={inputStyle}
            placeholder="Phone"
            disabled={!isEditing}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-[#86664B] text-lg">Gender</label>
          <Select
            value={gender}
            onChange={onChangeGender}
            style={{
              ...inputStyle,
              color: '#86664B',
              borderColor: '#E3D9C7',
              backgroundColor: '#E3D9C7',
            }}
            options={[
              { value: "MALE", label: "Male" },
              { value: "FEMALE", label: "Female" },
            ]}
            disabled={!isEditing}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
