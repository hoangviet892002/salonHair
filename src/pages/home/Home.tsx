import { CardSalon } from "@/components";
import { Salon } from "@/types/salon.type";
import { useQueryStrings } from "@/utils/useQuery";
import { useQuery } from "@tanstack/react-query";
import { Pagination, PaginationProps } from "antd";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const onChange: PaginationProps["onChange"] = (page) => {
    navigate({ search: `?page=${page}` });
  };
  let salons: Salon[] = [
    {
      id: 1,
      name: "Spa 1",
      address: "Hà Nội",
      phone: "0123456789",
      email: "spa1@example.com",
      description:
        "Spa 1 là địa điểm thư giãn tuyệt vời với dịch vụ chăm sóc sắc đẹp và làm đẹp chuyên nghiệp.",
      logo: "url_to_logo_image",
      status: "ACTIVE",
    },
    {
      id: 2,
      name: "Spa 2",
      address: "Hà Nội",
      phone: "0123456789",
      email: "",
      description: "Spa 2",
      logo: "",
      status: "ACTIVE",
    },
    {
      id: 3,
      name: "Spa 3",
      address: "Hà Nội",
      phone: "0123456789",
      email: "",
      description: "Spa 3",
      logo: "",
      status: "ACTIVE",
    },
    {
      id: 4,
      name: "Spa 4",
      address: "Hà Nội",
      phone: "0123456789",
      email: "",
      description: "Spa 4",
      logo: "",
      status: "ACTIVE",
    },
    {
      id: 5,
      name: "Spa 5",
      address: "Hà Nội",
      phone: "0123456789",
      email: "",
      description: "Spa 5",
      logo: "",
      status: "ACTIVE",
    },
    {
      id: 6,
      name: "Spa 6",
      address: "Hà Nội",
      phone: "0123456789",
      email: "",
      description: "Spa 6",
      logo: "",
      status: "ACTIVE",
    },
    {
      id: 7,
      name: "Spa 7",
      address: "Hà Nội",
      phone: "0123456789",
      email: "",
      description: "Spa 7",
      logo: "",
      status: "ACTIVE",
    },
    {
      id: 8,
      name: "Spa 8",
      address: "Hà Nội",
      phone: "0123456789",
      email: "",
      description: "Spa 8",
      logo: "",
      status: "ACTIVE",
    },
    {
      id: 9,
      name: "Spa 9",
      address: "Hà Nội",
      phone: "0123456789",
      email: "",
      description: "Spa 9",
      logo: "",
      status: "ACTIVE",
    },
    {
      id: 10,
      name: "Spa 10",
      address: "Hà Nội",
      phone: "0123456789",
      email: "",
      description: "Spa 9",
      logo: "",
      status: "ACTIVE",
    },
    // Add more salons as needed
  ];
  const queryString = useQueryStrings();
  const page = queryString.page ? parseInt(queryString.page) : 1;
  const { data, isLoading } = useQuery({
    queryKey: ["home", { page }],
    queryFn: () => {
      // Simulate API call
      const startIndex = (page - 1) * 9;
      const endIndex = startIndex + 9;
      return salons.slice(startIndex, endIndex);
    },
  });

  return (
    <>
      <div className="flex flex-col items-center justify-center bg-white min-h-screen">
        <div className="grid lg:grid-cols-3 md:grid-cols-3 gap-4 p-10">
          {isLoading
            ? Array(9)
                .fill(0)
                .map((_, index) => (
                  <div key={index} className="flex w-64 flex-col gap-4">
                    <div className="skeleton h-40 w-full rounded-lg"></div>
                    <div className="skeleton h-10 mt-2 w-full rounded-lg"></div>
                    <div className="skeleton h-10 w-full rounded-lg"></div>
                    <div className="skeleton h-10 w-full rounded-lg"></div>
                  </div>
                ))
            : data &&
              data.map((salon) => <CardSalon key={salon.id} salon={salon} />)}
        </div>
        <Pagination
          current={page}
          onChange={onChange}
          total={salons.length}
          pageSize={9}
        />
      </div>
    </>
  );
};

export default Home;
