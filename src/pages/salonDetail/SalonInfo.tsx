// SalonInfo.tsx
import React from 'react';
import { Input, DatePicker, TimePicker } from 'antd';
import { Salon } from '@/types'; // Định nghĩa kiểu Salon

interface SalonInfoProps {
  salon: Salon;
  onDateChange: (date: any, dateString: string) => void;
  onTimeChange: (time: any, timeString: string) => void;
}

const SalonInfo: React.FC<SalonInfoProps> = ({ salon, onDateChange, onTimeChange }) => {
  return (
    <div className="flex flex-col items-center rounded-lg bg-[#E3D9C7] w-full sm:w-[600px] h-full shadow-lg p-4 sm:p-8">
      <img
        className="my-3 w-full h-1/2 sm:h-[400px] rounded-lg object-cover"
        src={salon.logo}
        alt={salon.name}
      />
      <Input value={salon.address} className="w-full my-3" style={{ color: '#86664B' }} />
      <DatePicker onChange={onDateChange} className="w-full my-3" />
      <TimePicker onChange={onTimeChange} className="w-full my-3" />
    </div>
  );
};

export default SalonInfo;
