import React, { useEffect, useState } from "react";
import {
  SortAscendingOutlined,
  SortDescendingOutlined,
} from "@ant-design/icons";
import { mockReservations, mockSalons, Reservation, Salon } from "./mockData";

const BookingList = () => {
  const [bookings, setBookings] = useState<Reservation[]>([]);
  const [sortedBookings, setSortedBookings] = useState<Reservation[]>([]);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [sortColumn, setSortColumn] = useState<
    "user" | "time_from" | "comment" | "salon" | "status"
  >("time_from");
  const [filterStatus, setFilterStatus] = useState<
    "WAITING" | "DONE" | "CANCEL" | ""
  >("");
  const [filterSalon, setFilterSalon] = useState<number | null>(null);

  // Pagination states
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(16);

  useEffect(() => {
    setBookings(mockReservations);
  }, []);

  useEffect(() => {
    const sortedData = [...bookings].sort((a, b) => {
      if (sortOrder === "asc") {
        return a[sortColumn] > b[sortColumn] ? 1 : -1;
      } else {
        return a[sortColumn] < b[sortColumn] ? 1 : -1;
      }
    });
    setSortedBookings(sortedData);
  }, [bookings, sortColumn, sortOrder]);

  const filteredBookings = sortedBookings.filter(
    (booking) =>
      (filterStatus ? booking.status === filterStatus : true) &&
      (filterSalon !== null ? booking.salon.id === filterSalon : true)
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredBookings.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPages = Math.ceil(filteredBookings.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleSort = (
    column: "user" | "time_from" | "comment" | "salon" | "status"
  ) => {
    const newSortOrder =
      sortColumn === column ? (sortOrder === "asc" ? "desc" : "asc") : "asc";
    setSortOrder(newSortOrder);
    setSortColumn(column);
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value === "") {
      setFilterStatus("");
      setFilterSalon(null);
    } else if (value === "WAITING" || value === "DONE" || value === "CANCEL") {
      setFilterStatus(value as "WAITING" | "DONE" | "CANCEL");
      setFilterSalon(null);
    } else if (value.startsWith("salon")) {
      const salonId = parseInt(value.replace("salon-", ""));
      setFilterSalon(salonId);
      setFilterStatus("");
    }
  };

  const renderSortIcon = (
    column: "user" | "time_from" | "comment" | "salon" | "status"
  ) => {
    if (sortColumn === column) {
      return sortOrder === "asc" ? (
        <SortAscendingOutlined className="ml-1" />
      ) : (
        <SortDescendingOutlined className="ml-1" />
      );
    }
    return null;
  };

  const renderPagination = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li
          key={i}
          onClick={() => handlePageChange(i)}
          className={`cursor-pointer px-3 py-1 rounded-md ${
            currentPage === i ? "bg-gray-200" : "bg-white"
          }`}
        >
          {i}
        </li>
      );
    }
    return <ul className="flex space-x-2 mt-4">{pageNumbers}</ul>;
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Danh sách đặt lịch</h2>
        <div className="flex items-center space-x-4">
          <label className="text-white">Sắp xếp theo:</label>
          <select
            className="border border-gray-300 p-1 rounded"
            value={sortColumn}
            onChange={(e) =>
              handleSort(
                e.target.value as
                  | "user"
                  | "time_from"
                  | "comment"
                  | "salon"
                  | "status"
              )
            }
          >
            <option value="time_from">Thời gian</option>
            <option value="user">Người dùng</option>
            <option value="salon">Salon</option>
            <option value="status">Trạng thái</option>
            <option value="comment">Ghi chú</option>
          </select>
          <select
            className="border border-gray-300 p-1 rounded"
            value={filterStatus}
            onChange={handleFilterChange}
          >
            <option value="">Tất cả</option>
            <option value="WAITING">Đang chờ</option>
            <option value="DONE">Đã xong</option>
            <option value="CANCEL">Đã hủy</option>
          </select>
          <select
            className="border border-gray-300 p-1 rounded"
            value={filterSalon ? `salon-${filterSalon}` : ""}
            onChange={handleFilterChange}
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
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-100 border-b border-gray-300">
              <th className="px-4 py-2 text-left">Người dùng</th>
              <th
                className="px-4 py-2 text-left cursor-pointer"
                onClick={() => handleSort("time_from")}
              >
                Thời gian {renderSortIcon("time_from")}
              </th>
              <th className="px-4 py-2 text-left">Ghi chú</th>
              <th
                className="px-4 py-2 text-left cursor-pointer"
                onClick={() => handleSort("salon")}
              >
                Salon {renderSortIcon("salon")}
              </th>
              <th
                className="px-4 py-2 text-left cursor-pointer"
                onClick={() => handleSort("status")}
              >
                Trạng thái {renderSortIcon("status")}
              </th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((booking) => (
              <tr key={booking.id} className="border-b border-gray-300">
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
      {renderPagination()}
    </div>
  );
};

export default BookingList;
