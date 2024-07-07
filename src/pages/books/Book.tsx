import { Reservation } from "@/types/reservation.type";
import { useQueryStrings } from "@/utils/useQuery";
import { useQuery } from "@tanstack/react-query";
import { Button, Modal, Pagination, PaginationProps, TableProps } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Skeleton, Table } from "antd";
import { parseDate } from "@/utils/pasreDate";

const Book = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedReservation, setSelectedReservation] =
    useState<Reservation | null>(null); // Corrected type
  const showModal = (reservation: Reservation) => {
    setIsModalOpen(true);
    setSelectedReservation(reservation);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const reservations: Reservation[] = [
    {
      id: 1,
      salon_bed_id: 1,
      time_from: "2021-09-01T09:00:00",
      time_to: "2021-09-01T10:00:00",
      comment: "comment",
      status: "WAITING",
    },
    {
      id: 2,
      salon_bed_id: 2,
      time_from: "2021-09-01T10:00:00",
      time_to: "2021-09-01T11:00:00",
      comment: "comment",
      status: "DONE",
    },
  ];
  const columns: TableProps<Reservation>["columns"] = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Salon Bed ID",
      dataIndex: "salon_bed_id",
      key: "salon_bed_id",
    },
    {
      title: "Time From",
      dataIndex: "time_from",
      key: "time_from",
      render(time_from) {
        return parseDate(time_from);
      },
    },
    {
      title: "Time To",
      dataIndex: "time_to",
      key: "time_to",
      render(time_from) {
        return parseDate(time_from);
      },
    },
    {
      title: "Comment",
      dataIndex: "comment",
      key: "comment",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render(status, reservation) {
        return (
          <Button
            onClick={() => showModal(reservation)}
            type="primary"
            disabled={status !== "WAITING"}
          >
            {status}
          </Button>
        );
      },
    },
  ];

  const onChange: PaginationProps["onChange"] = (page) => {
    navigate({ search: `?page=${page}` });
  };
  const queryString = useQueryStrings();
  const page = queryString.page ? parseInt(queryString.page) : 1;
  const { data, isLoading } = useQuery({
    queryKey: ["books", { page }],
    queryFn: () => {
      // Simulate API call
      return reservations;
    },
  });

  return (
    <>
      {isLoading && <Skeleton active />}
      {!isLoading && (
        <>
          <Table
            dataSource={data}
            columns={columns}
            pagination={false}
            bordered
            title={() => "Booking"}
          />
          <Pagination current={page} total={50} onChange={onChange} />
        </>
      )}
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div>Time From: {selectedReservation?.time_from}</div>
        <div>Time To: {selectedReservation?.time_to}</div>
      </Modal>
    </>
  );
};

export default Book;
