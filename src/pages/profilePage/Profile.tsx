import React, { useEffect, useState } from "react";
import { Button, Upload, Skeleton, message } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import ProfileInfo from "./ProfileInfo"; // Import ProfileInfo component
import { getProfile } from "@/apis/auth.api";
import { ResponseType } from "@/types/response.type";
import { ProfilePayload } from "@/types/user.type";

const beforeUpload = (file: File) => {
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

const getBase64 = (file: File, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result as string));
  reader.readAsDataURL(file);
};

const Profile = () => {
  const [loadingForm, setLoadingForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState<ProfilePayload>({
    avatar: "",
    email: "",
    gender: "",
    username: "",
    fullName: "",
    phone: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  const fetchProfile = async () => {
    setLoadingForm(true);
    const response: ResponseType<ProfilePayload> = await getProfile();
    setProfile(response.data);
    setLoadingForm(false);
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const handleChange = (value: string) => {
    setProfile({ ...profile, gender: value });
  };

  const handleChangeImage = (info: any) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done" || info.file.status === "error") {
      setLoading(false);
    }
    if (info.file.originFileObj) {
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setProfile({ ...profile, avatar: url });
      });
    }
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="flex w-screen h-screen items-center justify-center border-collapse">
      <div className="flex bg-[#86664B] h-[600px] w-[1300px]">
        <div className="h-full w-1/2 flex items-center justify-center">
          <div>
            <Upload
              name="avatar"
              className="h-[500px] w-[500px] flex items-center justify-center rounded-lg bg-[#E3D9C7]"
              showUploadList={false}
              beforeUpload={beforeUpload}
              onChange={handleChangeImage}
            >
              {profile.avatar ? (
                <img
                  className="rounded-lg h-[500px] w-[500px]"
                  src={profile.avatar}
                  alt="avatar"
                />
              ) : (
                <button style={{ border: 0, background: "none" }} type="button">
                  {loading ? <LoadingOutlined /> : <PlusOutlined />}
                  <div>Upload</div>
                </button>
              )}
            </Upload>
          </div>
        </div>
        <div className="h-full w-1/2 flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl text-[#86664B]">Profile</h1>
            {loadingForm ? (
              <Skeleton />
            ) : (
              <div className="flex flex-col gap-4 mt-5">
                <ProfileInfo
                  fullName={profile.fullName}
                  username={profile.username}
                  email={profile.email}
                  phone={profile.phone}
                  gender={profile.gender}
                  onChangeFullName={(e) =>
                    setProfile({ ...profile, fullName: e.target.value })
                  }
                  onChangeUsername={(e) =>
                    setProfile({ ...profile, username: e.target.value })
                  }
                  onChangeEmail={(e) =>
                    setProfile({ ...profile, email: e.target.value })
                  }
                  onChangePhone={(e) =>
                    setProfile({ ...profile, phone: e.target.value })
                  }
                  onChangeGender={handleChange}
                  isEditing={isEditing}  // Pass isEditing state
                />
                <div className="flex gap-4">
                  <Button
                    onClick={toggleEdit}
                    className="bg-[#86664B] text-white p-2 rounded-lg"
                  >
                    {isEditing ? "Save" : "Edit"}
                  </Button>
                  <Button className="bg-[#86664B] text-white p-2 rounded-lg">
                    Change Password
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
