import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import SalonInfo from './SalonInfo';
import BedList from './BedList';
import BookingModal from './BookingModal';
import { salons, beds } from '@/data/salons'; // Import salons and beds data

const SalonDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Lấy id từ URL
  const [salon] = useState(() => salons.find((s) => s.id === parseInt(id))!); // Lọc dữ liệu tiệm từ id

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pickedBed, setPickedBed] = useState({
    id: "",
    salonId: "",
    name: "",
    description: "",
    status: "",
  });
  const [isBooked, setIsBooked] = useState(false);

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

  const handleBookBed = (bed) => {
    setPickedBed(bed);
    setIsModalOpen(true);
  };

  const handleDateChange = (date: any, dateString: string) => {
    // Handle date change
  };

  const handleTimeChange = (time: any, timeString: string) => {
    // Handle time change
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 bg-[#E3D9C7] mx-4 sm:mx-20 h-screen mt-8">
      <SalonInfo
        salon={salon}
        onDateChange={handleDateChange}
        onTimeChange={handleTimeChange}
      />
      <div className="flex flex-col items-start w-full sm:w-1/2">
        {isBooked ? (
          <>
            <h1 className="text-3xl font-bold text-[#86664B] mt-4 sm:mt-0">
              Đặt lịch
            </h1>
            <BedList beds={beds.filter(bed => bed.salonId === salon.id)} onBookBed={handleBookBed} />
            <button
              className="bg-[#86664B] text-white p-2 rounded-lg mt-4"
              onClick={() => setIsBooked(false)}
            >
              Quay lại chi tiết
            </button>
          </>
        ) : (
          <>
            <h1 className="text-3xl font-bold text-[#86664B] mt-4 sm:mt-0">
              {salon.name}
            </h1>
            <p className="text-xl text-[#86664B]">Địa chỉ: {salon.address}</p>
            <p className="text-xl text-[#86664B]">
              Thông tin: {salon.description}
            </p>
            <div className="w-full text-right">
              <button
                className={`bg-[#86664B] text-white p-2 rounded-lg`}
                onClick={() => setIsBooked(true)}
              >
                Đặt lịch
              </button>
            </div>
          </>
        )}
      </div>
      <BookingModal
        isModalOpen={isModalOpen}
        pickedBed={pickedBed}
        onConfirm={handleOk}
        onCancel={handleCancel}
      />
    </div>
  );
};

export default SalonDetail;
