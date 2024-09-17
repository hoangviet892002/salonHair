// BedList.tsx
import React from 'react';
import { Button } from 'antd';
import { Bed } from '@/types'; // Định nghĩa kiểu Bed

interface BedListProps {
  beds: Bed[];
  onBookBed: (bed: Bed) => void;
}

const BedList: React.FC<BedListProps> = ({ beds, onBookBed }) => {
  return (
    <div className="w-full ">
      <p className="text-xl">Chọn Giường:</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {beds.map((bed) => (
          <div key={bed.id} className="flex flex-col items-center my-2">
            <Button
              className={`bg-[#86664B] text-white p-5 rounded-lg w-full ${
                bed.status !== "ACTIVE" ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={bed.status !== "ACTIVE"}
              onClick={() => onBookBed(bed)}
            >
              {bed.name}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BedList;
