import { Salon } from "@/types/salon.type";

interface SalonDetailInfoProps {
  salon: Salon;
}

const SalonDetailInfo: React.FC<SalonDetailInfoProps> = ({ salon }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="font-bold">Hình ảnh:</div>
      <div>
        <img
          src={salon.logo}
          alt={salon.name}
          className="w-40 h-40 object-cover rounded-lg"
        />
      </div>
      <div className="font-bold">Tên tiệm:</div>
      <div>{salon.name}</div>
      <div className="font-bold">Số điện thoại:</div>
      <div>{salon.phone}</div>
      <div className="font-bold">Email:</div>
      <div>{salon.email}</div>
      <div className="font-bold">Địa chỉ:</div>
      <div>{salon.address}</div>
      <div className="font-bold">Giới thiệu salon:</div>
      <div>{salon.description}</div>
    </div>
  );
};

export default SalonDetailInfo;
