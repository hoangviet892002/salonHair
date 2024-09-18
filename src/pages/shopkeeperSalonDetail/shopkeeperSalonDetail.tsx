import React, { useCallback } from "react";
import { useParams } from "react-router-dom";
import { Salon } from "@/types/salon.type";
import SalonDetailForm from "./SalonDetailForm";


const ShopkeeperSalonDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const salons: Salon[] = [
    // Thay thế bằng dữ liệu thật hoặc gọi API
    {
      id: 1,
      name: "Chien",
      email: "chienlag1702@gmail.com",
      status: "active",
      description: "wfe",
      address: "Quy Nhon",
      phone: "097817739",
      logo: "https://serapool.fra1.cdn.digitaloceanspaces.com/media/4749/what-is-spa-serapool.jpg",
    },
    // Các salon khác
  ];

  const salon: Salon | undefined = salons.find((s) => s.id === parseInt(id));

  const handleSave = (values: Salon) => {
    console.log("Saved values:", values);
    // Thực hiện lưu dữ liệu, ví dụ: gọi API để cập nhật salon
  };

  const handleCancel = () => {
    // Điều hướng hoặc đóng form chỉnh sửa
  };

  if (!salon) {
    return <div>Salon not found.</div>;
  }

  return (
    <div>
      <SalonDetailForm salon={salon} onSave={handleSave} onCancel={handleCancel} />
    </div>
  );
};

export default ShopkeeperSalonDetail;
