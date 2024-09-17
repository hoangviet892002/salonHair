import { Salon } from "@/types/salon.type";
import React from "react";
import { useNavigate } from "react-router-dom";

interface CardSalonProps {
  salon: Salon;
}

const CardSalon: React.FC<CardSalonProps> = ({ salon }) => {
  const navigate = useNavigate();
  return (
    <div
      className="flex flex-col gap-4 bg-[#86664B] p-4 rounded-lg shadow-lg"
      style={{ minWidth: "350px", width: "100%" }}
    >
      <div className="h-40 w-full bg-[#ffffff] rounded-t-lg overflow-hidden">
        <img
          className="object-cover h-full w-full"
          src={salon.logo}
          alt={salon.name}
        />
      </div>
      <div className="h-10 mt-2 text-[#E3D9C7] text-lg font-bold">
        <p>{salon.name}</p>
      </div>
      <button
        className="bg-[#E3D9C7] text-[#86664B] py-2 rounded-lg w-full hover:bg-opacity-90"
        onClick={() => navigate(`/salon/${salon.id}`)}
      >
        Xem chi tiết
      </button>
    </div>
  );
};

export default CardSalon;
