import React from "react";
import { Modal, Button } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";

const { confirm } = Modal;

interface ConfirmCancelModalProps {
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmCancelModal: React.FC<ConfirmCancelModalProps> = ({ onConfirm, onCancel }) => {
  const showConfirm = () => {
    confirm({
      title: "Xác nhận hủy booking",
      icon: <ExclamationCircleOutlined />,
      content: "Bạn có chắc chắn muốn hủy booking này?",
      okText: "Có",
      cancelText: "Không",
      onOk: onConfirm,
      onCancel: onCancel,
    });
  };

  return (
    <Button
      type="primary"
      danger
      onClick={showConfirm}
      className="bg-[#89634A] hover:bg-[#6b4a38] text-[#E3D9C7]"
    >
      Hủy
    </Button>
  );
};

export default ConfirmCancelModal;
