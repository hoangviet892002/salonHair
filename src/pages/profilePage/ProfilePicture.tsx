import React from "react";
import { Upload, Button, message } from "antd";
import { LoadingOutlined, CameraOutlined } from "@ant-design/icons";

type FileType = Parameters<typeof Upload["props"]["beforeUpload"]>[0];

const beforeUpload = (file: FileType) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
    return false;
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
    return false;
  }
  return true;
};

const getBase64 = (file: FileType, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result as string));
  reader.readAsDataURL(file);
};

interface ProfilePictureProps {
  avatar: string;
  onChangeImage: (info: any) => void;
  loading: boolean;
}

const ProfilePicture: React.FC<ProfilePictureProps> = ({ avatar, onChangeImage, loading }) => {
  const uploadButton = (
    <div className="flex flex-col items-center">
      {loading ? (
        <LoadingOutlined />
      ) : (
        <div className="text-3xl">
          <CameraOutlined />
        </div>
      )}
      <div>Upload</div>
    </div>
  );

  return (
    <Upload
      name="avatar"
      className="h-[500px] w-[500px] bg-[#E3D9C7] flex items-center justify-center rounded-lg"
      showUploadList={false}
      beforeUpload={beforeUpload}
      onChange={onChangeImage}
    >
      {avatar ? (
        <img className="rounded-lg h-[500px] w-[500px]" src={avatar} alt="avatar" />
      ) : (
        uploadButton
      )}
    </Upload>
  );
};

export default ProfilePicture;
