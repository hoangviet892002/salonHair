// src/pages/Home.tsx
import { CardSalon } from "@/components";
import { Salon } from "@/types/salon.type";
import { useQueryStrings } from "@/utils/useQuery";
import { useQuery } from "@tanstack/react-query";
import { Pagination, PaginationProps } from "antd";
import { useNavigate } from "react-router-dom";
import { salons } from "@/data/salons"; // Import data from the shared file
import { Link } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const onChange: PaginationProps["onChange"] = (page) => {
    navigate({ search: `?page=${page}` });
  };

  const queryString = useQueryStrings();
  const page = queryString.page ? parseInt(queryString.page) : 1;
  const { data, isLoading } = useQuery({
    queryKey: ["home", { page }],
    queryFn: () => {
      // Simulate API call
      return salons;
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
              data.map((salon) => (
                <Link to={`/salon/${salon.id}`} key={salon.id}>
                  <CardSalon salon={salon} />
                </Link>
              ))}
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
