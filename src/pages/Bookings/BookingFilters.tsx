import React from "react";
import { mockSalons } from "./mockData";

interface BookingFiltersProps {
  sortColumn: "user" | "time_from" | "comment" | "salon" | "status";
  sortOrder: "asc" | "desc";
  filterStatus: "WAITING" | "DONE" | "CANCEL" | "";
  filterSalon: number | null;
  onSortChange: (column: "user" | "time_from" | "comment" | "salon" | "status") => void;
  onFilterChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const BookingFilters: React.FC<BookingFiltersProps> = ({
  sortColumn,
  sortOrder,
  filterStatus,
  filterSalon,
  onSortChange,
  onFilterChange,
}) => {
  return (
    <div className="flex justify-between items-center mb-4">
    <h2 className="text-4xl font-bold text-[#86664B] p-3">Danh sách đặt lịch</h2>

      <div className="flex items-center space-x-4">
        <label className="text-[#86664B]">Sắp xếp theo:</label>
        <select
          className="bg-[#86664B] text-[#E3D9C7] p-1 rounded"
          value={sortColumn}
          onChange={(e) =>
            onSortChange(e.target.value as "user" | "time_from" | "comment" | "salon" | "status")
          }
        >
          <option value="time_from">Thời gian</option>
          <option value="user">Người dùng</option>
          <option value="salon">Salon</option>
          <option value="status">Trạng thái</option>
          <option value="comment">Ghi chú</option>
        </select>
        <select
          className="bg-[#86664B] text-[#E3D9C7] p-1 rounded"
          value={filterStatus}
          onChange={onFilterChange}
        >
          <option value="">Tất cả</option>
          <option value="WAITING">Đang chờ</option>
          <option value="DONE">Đã xong</option>
          <option value="CANCEL">Đã hủy</option>
        </select>
        <select
          className="bg-[#86664B] text-[#E3D9C7] p-1 rounded"
          value={filterSalon ? `salon-${filterSalon}` : ""}
          onChange={onFilterChange}
        >
          <option value="">Tất cả</option>
          {mockSalons.map((salon) => (
            <option key={salon.id} value={`salon-${salon.id}`}>
              {salon.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default BookingFilters;
