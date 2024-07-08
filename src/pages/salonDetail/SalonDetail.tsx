import { useState } from "react";
import { useParams } from "react-router-dom";
import { Modal, Input, DatePicker, TimePicker, Button } from "antd";
import { salons, beds } from "@/data/salons"; // Import salons and beds data

const SalonDetail = () => {
  const { id } = useParams<{ id: string }>(); // Lấy id từ URL
  const [salon] = useState(() => salons.find((s) => s.id === parseInt(id))!); // Lọc dữ liệu tiệm từ id

  // State và hàm xử lý Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pickedBed, setPickedBed] = useState({
    id: "",
    salonId: "",
    name: "",
    description: "",
    status: "",
  });
  const [isBooked, setIsBooked] = useState(false);

  // Các hàm xử lý sự kiện cho Modal
  const showModal = (bed) => {
    setIsModalOpen(true);
    setPickedBed(bed);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // Render danh sách giường của tiệm
  const renderBeds = (salonId: number) => {
    const salonBeds = beds.filter((bed) => bed.salonId === salonId);

    const handleBookBed = (bed) => {
      setPickedBed(bed);
      setIsModalOpen(true);
    };

    return (
      <div className="w-full">
        <p className="text-xl text-[#987070]">Chọn Giường:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {salonBeds.map((bed) => (
            <div key={bed.id} className="flex flex-col items-center my-2">
              <Button
                className={`bg-[#987070] text-white p-5 rounded-lg w-full ${
                  bed.status !== "ACTIVE" ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={bed.status !== "ACTIVE"}
                onClick={() => handleBookBed(bed)}
              >
                {bed.name}
              </Button>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Trả về JSX cho component SalonDetail
  return (
    <div className="flex flex-col sm:flex-row gap-4 bg-white mx-4 sm:mx-20 h-screen">
      <div className="flex flex-col items-center rounded-lg bg-[#FF9FAB] w-full sm:w-[600px] h-full shadow-lg p-4 sm:p-8">
        <img
          className="my-3 w-full h-1/2 sm:h-[400px] rounded-lg object-cover"
          src={salon.logo}
          alt={salon.name}
        />
        <Input value={salon.address} className="w-full my-3" />
        <DatePicker onChange={() => {}} className="w-full my-3" />
        <TimePicker onChange={() => {}} className="w-full my-3" />
      </div>
      <div className="flex flex-col items-start w-full sm:w-1/2">
        {isBooked ? (
          <>
            <h1 className="text-3xl font-bold text-[#987070] mt-4 sm:mt-0">
              Đặt lịch
            </h1>
            {renderBeds(salon.id)}
            <button
              className="bg-[#987070] text-white p-2 rounded-lg mt-4"
              onClick={() => setIsBooked(false)}
            >
              Quay lại chi tiết
            </button>
          </>
        ) : (
          <>
            <h1 className="text-3xl font-bold text-[#987070] mt-4 sm:mt-0">
              {salon.name}
            </h1>
            <p className="text-xl text-[#987070]">Địa chỉ: {salon.address}</p>
            <p className="text-xl text-[#987070]">
              Thông tin: {salon.description}
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
        title="Xác nhận đặt giường"
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Hủy
          </Button>,
          <Button key="submit" type="primary" onClick={handleOk}>
            Đồng ý
          </Button>,
        ]}
      >
        <p>Bạn đang đặt giường: {pickedBed.name}</p>
        <p>Mô tả: {pickedBed.description}</p>
        <p>Trạng thái: {pickedBed.status}</p>
      </Modal>
    </div>
  );
};

export default SalonDetail;
