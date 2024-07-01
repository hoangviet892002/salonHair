import { Salon } from "@/types/salon.type";
import { DatePickerProps, TimePicker, Input, Button, Modal } from "antd";
import React, { useState } from "react";
import { DatePicker } from "antd";
import { Bed } from "@/types/bed.type";

const SalonDetail = () => {
  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    // console.log(date, dateString);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const Bed: Bed[] = [
    {
      id: "1",
      salonId: "1",
      name: "Bed 1",
      descroption: "Bed 1",
      status: "INACTIVE",
    },
    {
      id: "2",
      salonId: "1",
      name: "Bed 2",
      descroption: "Bed 2",
      status: "ACTIVE",
    },
    {
      id: "3",
      salonId: "1",
      name: "Bed 3",
      descroption: "Bed 3",
      status: "ACTIVE",
    },
    {
      id: "4",
      salonId: "1",
      name: "Bed 4",
      descroption: "Bed 4",
      status: "ACTIVE",
    },
  ];
  const [pickedBed, setPickedBed] = useState<Bed>({
    id: "",
    salonId: "",
    name: "",
    descroption: "",
    status: "",
  });
  const [isBooked, setIsBooked] = useState(false);
  const Salon: Salon = {
    id: 1,
    name: "Spa 1",
    address: "Hà Nội",
    phone: "0123456789",
    email: "",
    description: "Spa 1",
    logo: "https://serapool.fra1.cdn.digitaloceanspaces.com/media/4749/what-is-spa-serapool.jpg",
    status: "ACTIVE",
  };
  const showModal = (bed: Bed) => {
    setIsModalOpen(true);
    setPickedBed(bed);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-row gap-4 bg-pink-200  mx-20 h-screen">
      <div className="flex flex-col items-center  rounded-lg bg-pink-400 w-[600px] h-full ">
        <img
          className="my-3 w-400px h-1/2 m-2 rounded-lg"
          src={Salon.logo}
          alt={Salon.name}
        />
        <Input value={Salon.address} className="w-96 py-2 my-3" />
        <DatePicker onChange={onChange} className="w-96 py-2 my-3" />
        <TimePicker onChange={onChange} className="w-96 py-2 my-3" />
      </div>
      <div className="flex flex-col items-center w-1/2">
        {isBooked ? (
          <>
            <h1 className="text-3xl font-bold text-pink-400">Đặt lịch</h1>
            <div className="w-full">
              <p className="text-xl text-pink-400">Chọn Phòng:</p>
              <div className="grid grid-cols-3">
                {Bed.map((bed) => (
                  <div key={bed.id} className="flex flex-col items-center m-2">
                    <Button
                      className={`${
                        bed.status === "ACTIVE" ? "bg-pink-400" : "bg-pink-900"
                      } text-white p-5 rounded-lg w-48 ${
                        bed.status !== "ACTIVE"
                          ? "opacity-50 cursor-not-allowed"
                          : ""
                      }`}
                      disabled={bed.status !== "ACTIVE"}
                      onClick={() => {
                        showModal(bed);
                      }}
                    >
                      {bed.name}
                    </Button>
                  </div>
                ))}
              </div>
            </div>
            <button
              className="bg-pink-400 text-white p-2 rounded-lg"
              onClick={() => setIsBooked(false)}
            >
              Back to Detail
            </button>
          </>
        ) : (
          <>
            <h1 className="text-3xl font-bold text-pink-400">{Salon.name}</h1>
            <p className="text-xl text-pink-400">{Salon.address}</p>
            <p className="text-xl text-pink-400">{Salon.phone}</p>
            <p className="text-xl text-pink-400">{Salon.email}</p>
            <p className="text-xl text-pink-400">{Salon.description}</p>
            <div className="w-full text-right">
              <button
                className={`bg-pink-400 text-white p-2 rounded-lg`}
                onClick={() => setIsBooked(true)}
              >
                Đặt lịch
              </button>
            </div>
          </>
        )}
      </div>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>{pickedBed.name}</p>
        <p>{pickedBed.descroption}</p>
      </Modal>
    </div>
  );
};

export default SalonDetail;
