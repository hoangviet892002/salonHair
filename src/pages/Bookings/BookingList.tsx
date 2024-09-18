import React, { useEffect, useState } from "react";
import BookingTable from "./BookingTable";
import BookingFilters from "./BookingFilters";
import Pagination from "./Pagination";
import { mockReservations, Reservation } from "./mockData";

const BookingList = () => {
  const [bookings, setBookings] = useState<Reservation[]>([]);
  const [sortedBookings, setSortedBookings] = useState<Reservation[]>([]);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [sortColumn, setSortColumn] = useState<"user" | "time_from" | "comment" | "salon" | "status">("time_from");
  const [filterStatus, setFilterStatus] = useState<"WAITING" | "DONE" | "CANCEL" | "">("");
  const [filterSalon, setFilterSalon] = useState<number | null>(null);

  // Pagination states
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(16);

  useEffect(() => {
    setBookings(mockReservations);
  }, []);

  useEffect(() => {
    const sortedData = [...bookings].sort((a, b) => {
      if (sortColumn === "time_from") {
        return sortOrder === "asc"
          ? new Date(a.time_from).getTime() - new Date(b.time_from).getTime()
          : new Date(b.time_from).getTime() - new Date(a.time_from).getTime();
      } else if (sortColumn === "user") {
        return sortOrder === "asc"
          ? a.user.full_name.localeCompare(b.user.full_name)
          : b.user.full_name.localeCompare(a.user.full_name);
      } else if (sortColumn === "salon") {
        return sortOrder === "asc"
          ? a.salon.name.localeCompare(b.salon.name)
          : b.salon.name.localeCompare(a.salon.name);
      } else if (sortColumn === "status") {
        return sortOrder === "asc"
          ? a.status.localeCompare(b.status)
          : b.status.localeCompare(a.status);
      } else if (sortColumn === "comment") {
        return sortOrder === "asc"
          ? a.comment.localeCompare(b.comment)
          : b.comment.localeCompare(a.comment);
      }
      return 0;
    });
    setSortedBookings(sortedData);
  }, [bookings, sortColumn, sortOrder]);

  useEffect(() => {
    const filteredData = sortedBookings.filter((booking) => {
      return (
        (filterStatus ? booking.status === filterStatus : true) &&
        (filterSalon ? booking.salon.id === filterSalon : true)
      );
    });
    setSortedBookings(filteredData);
  }, [filterStatus, filterSalon]);

  const handleSortChange = (column: "user" | "time_from" | "comment" | "salon" | "status") => {
    setSortColumn(column);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    if (value.startsWith("salon-")) {
      setFilterSalon(parseInt(value.replace("salon-", ""), 10));
    } else {
      setFilterSalon(null);
      setFilterStatus(value as "WAITING" | "DONE" | "CANCEL" | "");
    }
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedBookings.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(sortedBookings.length / itemsPerPage);

  return (
    <div>
      <BookingFilters
        sortColumn={sortColumn}
        sortOrder={sortOrder}
        filterStatus={filterStatus}
        filterSalon={filterSalon}
        onSortChange={handleSortChange}
        onFilterChange={handleFilterChange}
      />
      <BookingTable
        bookings={currentItems}
        sortColumn={sortColumn}
        sortOrder={sortOrder}
        onSort={handleSortChange}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default BookingList;
