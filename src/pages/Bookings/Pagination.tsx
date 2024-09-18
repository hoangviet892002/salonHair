import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(
      <li
        key={i}
        onClick={() => onPageChange(i)}
        className={`cursor-pointer px-3 py-1 rounded-md ${
          currentPage === i ? "bg-[#86664B] text-[#E3D9C7]" : "bg-white"
        }`}
      >
        {i}
      </li>
    );
  }
  return <ul className="flex space-x-2 mt-4">{pageNumbers}</ul>;
};

export default Pagination;
