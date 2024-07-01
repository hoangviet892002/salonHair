import { getProfile } from "@/apis/auth.api";
import { ResponseType } from "@/types/response.type";
import { ProfilePayload, User } from "@/types/user.type";
import { Button, Input, Select } from "antd";
import { useEffect, useState } from "react";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { Flex, message, Upload } from "antd";
import type { GetProp, UploadProps } from "antd";
type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];
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
const Profile = () => {
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState<ProfilePayload>({
    avatar: "",
    email: "",
    gender: "",
    username: "",
  });
  const fetchProfile = async () => {
    const response: ResponseType<ProfilePayload> = await getProfile();
    setProfile(response.data);
  };
  useEffect(() => {
    fetchProfile();
  }, []);
  const handleChange = (value: string) => {
    setProfile({ ...profile, gender: value });
  };
  const handleChangeImage: UploadProps["onChange"] = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done" || info.file.status === "error") {
      setLoading(false);
    }
    if (info.file.originFileObj) {
      getBase64(info.file.originFileObj as FileType, (url) => {
        setLoading(false);
        setProfile({ ...profile, avatar: url });
      });
    }
  };
  const uploadButton = (
    <button style={{ border: 0, background: "none" }} type="button">
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div>Upload</div>
    </button>
  );
  return (
    <div className="flex w-screen h-screen  items-center justify-center border-collapse">
      <div className="flex bg-pink-200  h-[600px] w-[1300px]">
        <div className="h-full bg-pink-400 w-1/2 flex items-center justify-center">
          <div>
            <Upload
              name="avatar"
              className="h-[500px] w-[500px]  flex items-center justify-center rounded-lg"
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
                uploadButton
              )}
            </Upload>
          </div>
        </div>
        <div className="h-full w-1/2 flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl text-[#FF9FAB]">Profile</h1>
            <div className="flex flex-col gap-4 mt-5">
              <div>
                <label className="text-[#987070] text-xl label">Username</label>
                <Input
                  value={profile.username}
                  className="w-96 py-2"
                  placeholder="Username"
                />
              </div>
              <div>
                <label className="text-[#987070] text-xl label ">Email</label>
                <Input
                  value={profile.email}
                  onChange={(e) => {
                    e.preventDefault();
                    setProfile({ ...profile, email: e.target.value });
                  }}
                  className="w-96 py-2"
                  placeholder="Username"
                />
              </div>

              <div>
                <label className="text-[#987070] text-xl label ">Gender</label>
                <Select
                  value={profile.gender}
                  onChange={handleChange}
                  className="w-96 py-2 h-[70px]"
                  options={[
                    { value: "MALE", label: "Male" },
                    { value: "FEMALE", label: "Female" },
                  ]}
                />
              </div>
            </div>{" "}
            <div>
              <Button className="bg-pink-400 text-white p-2 rounded-lg h-[40px] w-[100px]">
                Cập nhật
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
