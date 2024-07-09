
import React, { useState, useCallback } from "react";
import {

  DeleteOutlined,
  SaveOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { Input, Select } from "antd";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { Salon } from "@/types/salon.type";

const { Option } = Select;

const Admin = () => {
  const [salons, setSalons] = useState<Salon[]>([
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
    {
      id: 2,
      name: "Spa Beauty",
      email: "spa.beauty@gmail.com",
      status: "inactive",
      description: "High-end beauty treatments",
      address: "Da Nang",
      phone: "0912345678",
      logo: "logo_spa_beauty",
    },
    {
      id: 3,
      name: "Hair Magic",
      email: "hair.magic@gmail.com",
      status: "active",
      description: "Top-notch hair care services",
      address: "Ho Chi Minh City",
      phone: "0987654321",
      logo: "logo_hair_magic",
    },
    {
      id: 4,
      name: "Luxury Salon",
      email: "luxury.salon@gmail.com",
      status: "active",
      description: "Premium salon experience",
      address: "Hanoi",
      phone: "0909090909",
      logo: "logo_luxury_salon",
    },
    {
      id: 5,
      name: "Elegance Spa",
      email: "elegance.spa@gmail.com",
      status: "inactive",
      description: "Relax and rejuvenate",
      address: "Hai Phong",
      phone: "0888888888",
      logo: "logo_elegance_spa",
    },
  ]);

  const [editingId, setEditingId] = useState<number | null>(null);
  const [editingSalon, setEditingSalon] = useState<Salon | null>(null);

  const startEditing = useCallback((salon: Salon) => {
    setEditingId(salon.id);
    setEditingSalon(salon);
  }, []);

  const cancelEditing = useCallback(() => {
    setEditingId(null);
    setEditingSalon(null);
  }, []);

  const saveEditing = useCallback(() => {
    setSalons((prevSalons) =>
      prevSalons.map((salon) =>
        salon.id === editingId ? editingSalon! : salon
      )
    );
    setEditingId(null);
    setEditingSalon(null);
  }, [editingId, editingSalon]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (editingSalon) {
      setEditingSalon({
        ...editingSalon,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleStatusChange = (value: string) => {
    if (editingSalon) {
      setEditingSalon({
        ...editingSalon,
        status: value,
      });
    }
  };

  return (
    <div className="flex-1">
      <div className="w-full flex justify-end p-4">
       
      </div>
      <div className="overflow-x-auto flex">
        <table className="table">
          <thead>
            <tr>
              <th>Người dùng</th>
              <th>Email</th>
              <th>Số salon sở hữu</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {salons.map((salon) => (
              <tr key={salon.id} className="bg-base-200">
                <td>
                  <img
                    src={salon.logo}
                    alt={salon.name}
                    className="w-10 h-10"
                  />
                </td>
                <td>
                  {salon.email}
                </td>
                <td>    
                  {editingId === salon.id ? (
                    <Input
                      name="address"
                      value={editingSalon?.address}
                      onChange={handleInputChange}
                    />
                  ) : (
                    salon.address
                  )}
                </td>
               
               
                <td>
                  <div className="flex justify-center items-center h-full">
                    {editingId === salon.id ? (
                      <div className="grid grid-cols-2 gap-4">
                        <button onClick={saveEditing}>
                          <SaveOutlined />
                        </button>
                        <button onClick={cancelEditing}>
                          <CloseOutlined />
                        </button>
                      </div>
                    ) : (
                      <div className="grid gap-4">
                        <button>
                          <DeleteOutlined />
                        </button>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
