import { Salon } from "@/types/salon.type";
import { EditOutlined } from "@ant-design/icons";
import { Link, useParams } from "react-router-dom";

const ShopkeeperSalonDetail = () => {
  const { id } = useParams<{ id: string }>();
  const salons: Salon[] = [
    {
      id: 1,
      name: "Chien",
      email: "chienlag1702@gmail.com",
      status: "active",
      description: "wfe",
      address: "Quy Nhon",
      phone: "097817739",
      logo: "jgioru",
    },
    {
      id: 2,
      name: "Spa Beauty",
      email: "spa.beauty@gmail.com",
      status: "inactive",
      description: "High-end beauty treatments",
      address: "Da Nang",
      phone: "0912345678",
      logo: "logo_spa_beauty",
    },
    {
      id: 3,
      name: "Hair Magic",
      email: "hair.magic@gmail.com",
      status: "active",
      description: "Top-notch hair care services",
      address: "Ho Chi Minh City",
      phone: "0987654321",
      logo: "logo_hair_magic",
    },
    {
      id: 4,
      name: "Luxury Salon",
      email: "luxury.salon@gmail.com",
      status: "active",
      description: "Premium salon experience",
      address: "Hanoi",
      phone: "0909090909",
      logo: "logo_luxury_salon",
    },
    {
      id: 5,
      name: "Elegance Spa",
      email: "elegance.spa@gmail.com",
      status: "inactive",
      description: "Relax and rejuvenate",
      address: "Hai Phong",
      phone: "0888888888",
      logo: "logo_elegance_spa",
    },
  ];

  // Find the salon by ID
  const salon: Salon | undefined = salons.find((s) => s.id === parseInt(id));

  if (!salon) {
    return <div>Salon not found.</div>;
  }

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">{salon.name}</h2>
        <Link to={`/shopkeeper/salon/${id}/edit`} className="btn btn-primary">
          <EditOutlined /> Chỉnh sửa
        </Link>
      </div>
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
    </div>
  );
};

export default ShopkeeperSalonDetail;
