// src/pages/ChangePassword.tsx
import React, { useState } from "react";
import { Button, Input, Form, message } from "antd";
import { LockOutlined } from "@ant-design/icons";

const ChangePassword: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values: any) => {
    setLoading(true);
    // Xử lý gửi yêu cầu đổi mật khẩu tại đây
    // Ví dụ: const response = await api.changePassword(values);
    setLoading(false);
    message.success("Password changed successfully");
  };

  return (
    <div className="flex w-screen h-screen items-center justify-center bg-[#E3D9C7]">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl mb-4 text-[#86664B]">Change Password</h2>
        <Form
          name="change-password"
          initialValues={{ remember: true }}
          onFinish={handleSubmit}
        >
          <Form.Item
            name="currentPassword"
            rules={[{ required: true, message: 'Please input your current password!' }]}
          >
            <Input.Password
              placeholder="Current Password"
              prefix={<LockOutlined />}
            />
          </Form.Item>
          <Form.Item
            name="newPassword"
            rules={[{ required: true, message: 'Please input your new password!' }]}
          >
            <Input.Password
              placeholder="New Password"
              prefix={<LockOutlined />}
            />
          </Form.Item>
          <Form.Item
            name="confirmPassword"
            rules={[
              { required: true, message: 'Please confirm your new password!' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('newPassword') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject('The two passwords do not match!');
                },
              }),
            ]}
          >
            <Input.Password
              placeholder="Confirm New Password"
              prefix={<LockOutlined />}
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              className="w-full bg-[#86664B] text-white"
            >
              Change Password
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ChangePassword;
