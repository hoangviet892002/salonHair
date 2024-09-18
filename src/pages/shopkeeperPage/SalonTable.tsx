import React from "react";
import SalonRow from "./SalonRow";
import { Salon } from "@/types/salon.type";

interface SalonTableProps {
  salons: Salon[];
  editingId: number | null;
  editingSalon: Salon | null;
  onEdit: (salon: Salon) => void;
  onCancel: () => void;
  onSave: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onStatusChange: (value: string) => void;
}

const SalonTable: React.FC<SalonTableProps> = ({
  salons,
  editingId,
  editingSalon,
  onEdit,
  onCancel,
  onSave,
  onChange,
  onStatusChange,
}) => {
  return (
    <table className="table text-[#86664B]">
      <thead>
        <tr className="text-[#E3D9C7] bg-[#86664B]">
          <th >Ảnh</th>
          <th>Tên cửa tiệm</th>
          <th>Địa chỉ</th>
          <th>Email</th>
          <th>Trạng thái</th>
          <th className="text-center">Action</th>
        </tr>
      </thead>
      <tbody className="bg-[#E3D9C7]">
        {salons.map((salon) => (
          <SalonRow
            key={salon.id}
            salon={salon}
            editingId={editingId}
            editingSalon={editingSalon}
            onEdit={onEdit}
            onCancel={onCancel}
            onSave={onSave}
            onChange={onChange}
            onStatusChange={onStatusChange}
          />
        ))}
      </tbody>
    </table>
  );
};

export default SalonTable;
