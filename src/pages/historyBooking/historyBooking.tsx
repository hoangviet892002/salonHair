import React, { useState } from "react";
import { Table } from "antd";
import "antd/dist/reset.css"; // Ensure Ant Design styles are imported
import ConfirmCancelModal from "./ConfirmCancelModal"; // Import your modal component

interface BookingHistory {
  id: number;
  salonName: string;
  bookingTime: string;
  beds: number;
  status: string;
}

const BookingHistoryPage: React.FC = () => {
  const [bookingHistory, setBookingHistory] = useState<BookingHistory[]>([
    {
      id: 1,
      salonName: "Spa Beauty",
      bookingTime: "2024-09-16 10:00",
      beds: 2,
      status: "confirmed",
    },
    {
      id: 2,
      salonName: "Hair Magic",
      bookingTime: "2024-09-15 14:30",
      beds: 1,
      status: "pending",
    },
    {
      id: 3,
      salonName: "Elegance Spa",
      bookingTime: "2024-09-14 09:00",
      beds: 3,
      status: "cancelled",
    },
  ]);

  const cancelBooking = (id: number) => {
    setBookingHistory((prevHistory) =>
      prevHistory.map((booking) =>
        booking.id === id ? { ...booking, status: "cancelled" } : booking
      )
    );
  };

  const handleCancel = (id: number) => {
    const onConfirm = () => {
      cancelBooking(id);
    };
    
    const onCancel = () => {
      console.log("Cancelled");
    };

    return (
      <ConfirmCancelModal onConfirm={onConfirm} onCancel={onCancel} />
    );
  };

  const columns = [
    {
      title: "Tên Salon",
      dataIndex: "salonName",
      key: "salonName",
      render: (text: string) => (
        <span className="text-[#89634A] font-medium">{text}</span>
      ),
    },
    {
      title: "Thời gian",
      dataIndex: "bookingTime",
      key: "bookingTime",
      render: (text: string) => (
        <span className="text-[#89634A] font-medium">{text}</span>
      ),
    },
    {
      title: "Số giường",
      dataIndex: "beds",
      key: "beds",
      render: (text: number) => (
        <span className="text-[#89634A] font-medium">{text}</span>
      ),
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render: (status: string) => (
        <span
          className={
            status === "confirmed"
              ? "text-green-500 font-medium"
              : status === "pending"
              ? "text-yellow-500 font-medium"
              : "text-red-500 font-medium"
          }
        >
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (text: string, record: BookingHistory) => (
        handleCancel(record.id)
      ),
    },
  ];

  return (
    <div className="flex-1 p-4 bg-[#F6F5F2] min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-[#89634A]">Lịch sử booking</h1>
      <Table
        dataSource={bookingHistory}
        columns={columns}
        rowKey="id"
        pagination={false}
        className="bg-[#FFE5EC] text-[#89634A]"
      />
    </div>
  );
};

export default BookingHistoryPage;
