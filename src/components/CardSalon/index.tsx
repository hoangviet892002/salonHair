import { Salon } from "@/types/salon.type";
import React from "react";
import { useNavigate } from "react-router-dom";

interface CardSalonProps {
  salon: Salon;
}

const CardSalon: React.FC<CardSalonProps> = ({ salon }) => {
  const navigate = useNavigate();
  return (
    <div className="flex w-52 flex-col gap-4 bg-pink-200 p-2">
      <div className="h-32 w-full bg-pink-400 rounded-lg">
        <img className="rounded-lg" src={salon.logo} alt={salon.name} />
      </div>
      <div className="h-4 w-28 ">
        <p>{salon.name}</p>
      </div>

      <button
        className="bg-pink-400 text-white p-2 rounded-lg"
        onClick={() => navigate(`/salon/${salon.id}`)}
      >
        Xem chi tiết
      </button>
    </div>
  );
};

export default CardSalon;
