import React, { useState } from "react";
import { Form, Input, Button, Select, Image, Modal } from "antd";
import { Salon } from "@/types/salon.type";
import { EditOutlined } from "@ant-design/icons";

const { Option } = Select;

interface SalonDetailFormProps {
  salon: Salon;
  onSave: (values: Salon) => void;
  onCancel: () => void;
}

const SalonDetailForm: React.FC<SalonDetailFormProps> = ({ salon, onSave, onCancel }) => {
  const [form] = Form.useForm();
  const [isEditing, setIsEditing] = useState(false);
  const [imageModalVisible, setImageModalVisible] = useState(false);

  const handleFinish = (values: Salon) => {
    onSave(values);
    setIsEditing(false);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    form.setFieldsValue(salon); // Reset form values to original
  };

  const handleImageClick = () => {
    setImageModalVisible(true);
  };

  const handleImageModalCancel = () => {
    setImageModalVisible(false);
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      {isEditing ? (
        <Form
          form={form}
          layout="vertical"
          initialValues={salon}
          onFinish={handleFinish}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <Form.Item
            label="Hình ảnh"
            name="logo"
            className="text-center"
          >
            <Input
              placeholder="URL hình ảnh"
              onClick={handleImageClick}
            />
          </Form.Item>

          <Form.Item
            label="Tên tiệm"
            name="name"
            rules={[{ required: true, message: "Hãy nhập tên tiệm" }]}
          >
            <Input placeholder="Tên tiệm" />
          </Form.Item>

          <Form.Item
            label="Số điện thoại"
            name="phone"
            rules={[{ required: true, message: "Hãy nhập số điện thoại" }]}
          >
            <Input placeholder="Số điện thoại" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, type: "email", message: "Hãy nhập email hợp lệ" }]}
          >
            <Input placeholder="Email" />
          </Form.Item>

          <Form.Item
            label="Địa chỉ"
            name="address"
            rules={[{ required: true, message: "Hãy nhập địa chỉ" }]}
          >
            <Input placeholder="Địa chỉ" />
          </Form.Item>

          <Form.Item
            label="Trạng thái"
            name="status"
            rules={[{ required: true, message: "Hãy chọn trạng thái" }]}
          >
            <Select placeholder="Chọn trạng thái">
              <Option value="active">Active</Option>
              <Option value="inactive">Inactive</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Giới thiệu salon"
            name="description"
            rules={[{ required: true, message: "Hãy nhập giới thiệu salon" }]}
          >
            <Input.TextArea rows={4} placeholder="Giới thiệu salon" />
          </Form.Item>

          <Form.Item className="flex justify-end">
            <Button type="primary" htmlType="submit" className="mr-2">
              Lưu
            </Button>
            <Button onClick={handleCancelEdit}>Hủy</Button>
          </Form.Item>
        </Form>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-center mb-4">
            <Image
              width={300}
              src={salon.logo}
              fallback="https://via.placeholder.com/300"
              preview={false}
              style={{ cursor: 'pointer', borderRadius: '8px' }}
              onClick={handleImageClick}
            />
          </div>
          <Button
            type="default"
            icon={<EditOutlined />}
            onClick={handleEditClick}
            className="mb-4"
          >
            Chỉnh sửa
          </Button>
          <div>
            <div className="mb-2"><strong>Tên tiệm:</strong> {salon.name}</div>
            <div className="mb-2"><strong>Số điện thoại:</strong> {salon.phone}</div>
            <div className="mb-2"><strong>Email:</strong> {salon.email}</div>
            <div className="mb-2"><strong>Địa chỉ:</strong> {salon.address}</div>
            <div className="mb-2"><strong>Giới thiệu salon:</strong> {salon.description}</div>
          </div>
        </div>
      )}

      <Modal
        visible={imageModalVisible}
        footer={null}
        onCancel={handleImageModalCancel}
        centered
        width={600}
      >
        <Image
          src={form.getFieldValue('logo') || salon.logo}
          style={{ width: '100%', borderRadius: '8px' }}
          preview={false}
        />
      </Modal>
    </div>
  );
};

export default SalonDetailForm;
