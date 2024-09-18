import React from "react";
import { SortAscendingOutlined, SortDescendingOutlined } from "@ant-design/icons";
import { Reservation } from "./mockData";

interface BookingTableProps {
  bookings: Reservation[];
  sortColumn: "user" | "time_from" | "comment" | "salon" | "status";
  sortOrder: "asc" | "desc";
  onSort: (column: "user" | "time_from" | "comment" | "salon" | "status") => void;
}

const BookingTable: React.FC<BookingTableProps> = ({
  bookings,
  sortColumn,
  sortOrder,
  onSort,
}) => {
  const renderSortIcon = (column: "user" | "time_from" | "comment" | "salon" | "status") => {
    if (sortColumn === column) {
      return sortOrder === "asc" ? (
        <SortAscendingOutlined className="ml-1" />
      ) : (
        <SortDescendingOutlined className="ml-1" />
      );
    }
    return null;
  };

  return (
    <div className="overflow-x-auto bg-[#86664B]">
      <table className="min-w-full bg-[#E3D9C7] text-[#86664B] border border-[#86664B]">
        <thead>
          <tr className="bg-[#86664B] text-[#E3D9C7] border-b border-[#86664B]">
            <th className="px-4 py-2 text-left">Người dùng</th>
            <th
              className="px-4 py-2 text-left cursor-pointer"
              onClick={() => onSort("time_from")}
            >
              Thời gian {renderSortIcon("time_from")}
            </th>
            <th className="px-4 py-2 text-left">Ghi chú</th>
            <th
              className="px-4 py-2 text-left cursor-pointer"
              onClick={() => onSort("salon")}
            >
              Salon {renderSortIcon("salon")}
            </th>
            <th
              className="px-4 py-2 text-left cursor-pointer"
              onClick={() => onSort("status")}
            >
              Trạng thái {renderSortIcon("status")}
            </th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id} className="border-b border-[#86664B]">
              <td className="px-4 py-2">
                <div className="flex items-center">
                  {/* <img
                    src={booking.user.avatar}
                    alt={booking.user.full_name}
                    className="w-8 h-8 rounded-full object-cover"
                  /> */}
                  <span className="ml-2">{booking.user.full_name}</span>
                </div>
              </td>
              <td className="px-4 py-2">
                {new Date(booking.time_from).toLocaleString("en-GB")}
              </td>
              <td className="px-4 py-2">{booking.comment}</td>
              <td className="px-4 py-2">{booking.salon.name}</td>
              <td className="px-4 py-2">
                <span
                  className={`px-2 py-1 rounded ${
                    booking.status === "WAITING"
                      ? "bg-yellow-200 text-yellow-800"
                      : booking.status === "DONE"
                      ? "bg-green-200 text-green-800"
                      : "bg-red-200 text-red-800"
                  }`}
                >
                  {booking.status === "WAITING"
                    ? "Đang chờ"
                    : booking.status === "DONE"
                    ? "Đã xong"
                    : "Đã hủy"}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingTable;
