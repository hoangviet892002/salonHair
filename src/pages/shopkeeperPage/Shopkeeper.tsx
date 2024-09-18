import React, { useState, useCallback } from "react";
import SalonTable from "./SalonTable";
import { Salon } from "@/types/salon.type";
import { sampleSalons } from "./sampleData"; // Import dữ liệu mẫu
const Shopkeeper = () => {
  const [salons, setSalons] = useState<Salon[]>(sampleSalons);

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
        <button className="btn btn-secondary">Thêm Tiệm</button>
      </div>
      <div className="overflow-x-auto flex">
        <SalonTable
          salons={salons}
          editingId={editingId}
          editingSalon={editingSalon}
          onEdit={startEditing}
          onCancel={cancelEditing}
          onSave={saveEditing}
          onChange={handleInputChange}
          onStatusChange={handleStatusChange}
        />
      </div>
    </div>
  );
};

export default Shopkeeper;
