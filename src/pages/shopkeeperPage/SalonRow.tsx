import React from "react";
import { EditOutlined, DeleteOutlined, SaveOutlined, CloseOutlined } from "@ant-design/icons";
import { Input, Select } from "antd";
import { Link } from "react-router-dom";
import { Salon } from "@/types/salon.type";

const { Option } = Select;

interface SalonRowProps {
  salon: Salon;
  editingId: number | null;
  editingSalon: Salon | null;
  onEdit: (salon: Salon) => void;
  onCancel: () => void;
  onSave: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onStatusChange: (value: string) => void;
}

const SalonRow: React.FC<SalonRowProps> = ({
  salon,
  editingId,
  editingSalon,
  onEdit,
  onCancel,
  onSave,
  onChange,
  onStatusChange,
}) => {
  const isEditing = editingId === salon.id;

  return (
    <tr key={salon.id} className="bg-[#E3D9C7]">
      <td>
        <img src={salon.logo} alt={salon.name} className="w-10 h-10" />
      </td>
      <td>
        {isEditing ? (
          <Input name="name" value={editingSalon?.name} onChange={onChange} />
        ) : (
          <Link to={`/shopkeeper/salon/${salon.id}`}>{salon.name}</Link>
        )}
      </td>
      <td>
        {isEditing ? (
          <Input name="address" value={editingSalon?.address} onChange={onChange} />
        ) : (
          salon.address
        )}
      </td>
      <td>
        {isEditing ? (
          <Input name="email" value={editingSalon?.email} onChange={onChange} />
        ) : (
          salon.email
        )}
      </td>
      <td>
        {isEditing ? (
          <Select
            defaultValue={editingSalon?.status}
            style={{ width: 120 }}
            onChange={onStatusChange}
          >
            <Option value="active">Active</Option>
            <Option value="inactive">Inactive</Option>
          </Select>
        ) : (
          salon.status
        )}
      </td>
      <td>
        <div className="flex justify-center items-center h-full">
          {isEditing ? (
            <div className="grid grid-cols-2 gap-4">
              <button onClick={onSave}>
                <SaveOutlined />
              </button>
              <button onClick={onCancel}>
                <CloseOutlined />
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4">
              <button onClick={() => onEdit(salon)}>
                <EditOutlined />
              </button>
              <Link to={`/shopkeeper/salon/${salon.id}`}>Chi tiết</Link>
              <button>
                <DeleteOutlined />
              </button>
            </div>
          )}
        </div>
      </td>
    </tr>
  );
};

export default SalonRow;
