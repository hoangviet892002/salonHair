import { CardSalon } from "@/components";
import { Salon } from "@/types/salon.type";
import { useQueryStrings } from "@/utils/useQuery";
import { useQuery } from "@tanstack/react-query";
import { Pagination, PaginationProps } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const onChange: PaginationProps["onChange"] = (page) => {
    navigate({ search: `?page=${page}` });
  };
  let Salon: Salon[] = [
    {
      id: 1,
      name: "Spa 1",
      address: "Hà Nội",
      phone: "0123456789",
      email: "",
      description: "Spa 1",
      logo: "",
      status: "ACTIVE",
    },
    {
      id: 1,
      name: "Spa 1",
      address: "Hà Nội",
      phone: "0123456789",
      email: "",
      description: "Spa 1",
      logo: "",
      status: "ACTIVE",
    },
    {
      id: 1,
      name: "Spa 1",
      address: "Hà Nội",
      phone: "0123456789",
      email: "",
      description: "Spa 1",
      logo: "",
      status: "ACTIVE",
    },
    {
      id: 1,
      name: "Spa 1",
      address: "Hà Nội",
      phone: "0123456789",
      email: "",
      description: "Spa 1",
      logo: "",
      status: "ACTIVE",
    },
    {
      id: 1,
      name: "Spa 1",
      address: "Hà Nội",
      phone: "0123456789",
      email: "",
      description: "Spa 1",
      logo: "",
      status: "ACTIVE",
    },
  ];
  const queryString = useQueryStrings();
  const page = queryString.page ? parseInt(queryString.page) : 1;
  const { data, isLoading } = useQuery({
    queryKey: ["home", { page }],
    queryFn: () => {
      return Salon;
    },

    //   getDatasApi().then((res) => {
    //     return res;
    //   }),
  });

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="grid lg:grid-cols-3 gap-4 p-10 md:grid-cols-2">
          {isLoading && (
            <>
              {Array(6)
                .fill(0)
                .map((_, index) => (
                  <div key={index} className="flex w-52 flex-col gap-4">
                    <div className="skeleton h-32 w-full"></div>
                    <div className="skeleton h-4 w-28"></div>
                    <div className="skeleton h-4 w-full"></div>
                    <div className="skeleton h-4 w-full"></div>
                  </div>
                ))}
            </>
          )}
          {data &&
            data.map((salon) => <CardSalon key={salon.id} salon={salon} />)}
        </div>
        <Pagination current={page} onChange={onChange} total={50} />
      </div>
    </>
  );
};

export default Home;
