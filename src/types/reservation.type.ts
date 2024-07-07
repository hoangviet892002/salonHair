type status = "WAITING" | "DONE" | "CANCEL";
export interface Reservation {
  id: number;
  salon_bed_id: number;
  time_from: string;
  time_to: string;
  comment: string;
  status: status;
}
