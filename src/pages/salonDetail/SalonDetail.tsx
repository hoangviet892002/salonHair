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
    description:
      "Spa 1 là địa điểm thư giãn tuyệt vời với dịch vụ chăm sóc sắc đẹp và làm đẹp chuyên nghiệp.",
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
    <div className="flex flex-col sm:flex-row gap-4 bg-white mx-4 sm:mx-20 h-screen">
      <div className="flex flex-col items-center rounded-lg bg-[#FF9FAB] w-full sm:w-[600px] h-full shadow-lg p-4 sm:p-8">
        <img
          className="my-3 w-full h-1/2 sm:h-[400px] rounded-lg object-cover"
          src={Salon.logo}
          alt={Salon.name}
        />
        <Input value={Salon.address} className="w-full my-3" />
        <DatePicker onChange={onChange} className="w-full my-3" />
        <TimePicker onChange={onChange} className="w-full my-3" />
      </div>
      <div className="flex flex-col items-start w-full sm:w-1/2">
        {isBooked ? (
          <>
            <h1 className="text-3xl font-bold text-[#987070] mt-4 sm:mt-0">
              Đặt lịch
            </h1>
            <div className="w-full">
              <p className="text-xl text-[#987070]">Chọn Phòng:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {Bed.map((bed) => (
                  <div key={bed.id} className="flex flex-col items-center my-2">
                    <Button
                      className={`bg-[#987070] text-white p-5 rounded-lg w-full ${
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
              className="bg-[#987070] text-white p-2 rounded-lg mt-4"
              onClick={() => setIsBooked(false)}
            >
              Back to Detail
            </button>
          </>
        ) : (
          <>
            <h1 className="text-3xl font-bold text-[#987070] mt-4 sm:mt-0">
              {Salon.name}
            </h1>
            <p className="text-xl text-[#987070]">Địa chỉ: {Salon.address}</p>
            <p className="text-xl text-[#987070]">
              Description: {Salon.description}
            </p>
            <div className="w-full text-right">
              <button
                className={`bg-[#987070] text-white p-2 rounded-lg`}
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
        visible={isModalOpen}
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
