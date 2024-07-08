export type Reservation = {
  id: number;
  user: {
    id: number;
    full_name: string;
    avatar: string;
  };
  salon: {
    id: number;
    name: string;
  };
  time_from: Date;
  status: "WAITING" | "DONE" | "CANCEL";
  comment: string;
};

export type Salon = {
  id: number;
  name: string;
};

export const mockReservations: Reservation[] = [
  {
    id: 1,
    user: {
      id: 1,
      full_name: "Nguyễn Văn A",
      avatar: "avatar_url",
    },
    salon: {
      id: 1,
      name: "Chien",
    },
    time_from: new Date("2024-07-08T10:00:00Z"),
    status: "WAITING",
    comment: "nước ấm, gội lực nhẹ, không nói chuyện",
  },
  {
    id: 2,
    user: {
      id: 2,
      full_name: "Trần Thị B",
      avatar: "avatar_url",
    },
    salon: {
      id: 2,
      name: "Spa Beauty",
    },
    time_from: new Date("2024-07-08T14:30:00Z"),
    status: "DONE",
    comment: "nước lạnh, không nói chuyện",
  },
  {
    id: 3,
    user: {
      id: 3,
      full_name: "Lê Văn C",
      avatar: "avatar_url",
    },
    salon: {
      id: 3,
      name: "Hair Magic",
    },
    time_from: new Date("2024-07-09T12:00:00Z"),
    status: "WAITING",
    comment: "nước ấm",
  },
  {
    id: 4,
    user: {
      id: 1,
      full_name: "Nguyễn Văn A",
      avatar: "avatar_url",
    },
    salon: {
      id: 1,
      name: "Chien",
    },
    time_from: new Date("2024-07-09T15:30:00Z"),
    status: "CANCEL",
    comment: "nước ấm, gội lực nhẹ, tẩy tế bào chết da đầu",
  },
  {
    id: 5,
    user: {
      id: 4,
      full_name: "Phạm Thị D",
      avatar: "avatar_url",
    },
    salon: {
      id: 4,
      name: "Luxury Salon",
    },
    time_from: new Date("2024-07-10T11:00:00Z"),
    status: "DONE",
    comment: "gội lực nhẹ",
  },
  {
    id: 6,
    user: {
      id: 5,
      full_name: "Hoàng Văn E",
      avatar: "avatar_url",
    },
    salon: {
      id: 5,
      name: "Elegance Spa",
    },
    time_from: new Date("2024-07-11T13:30:00Z"),
    status: "WAITING",
    comment: "nước ấm, rửa mặt, xịt tinh dầu",
  },
  {
    id: 7,
    user: {
      id: 6,
      full_name: "Mai Thị F",
      avatar: "avatar_url",
    },
    salon: {
      id: 2,
      name: "Spa Beauty",
    },
    time_from: new Date("2024-07-12T10:00:00Z"),
    status: "WAITING",
    comment: "gội lực nhẹ",
  },
  {
    id: 8,
    user: {
      id: 7,
      full_name: "Vũ Văn G",
      avatar: "avatar_url",
    },
    salon: {
      id: 3,
      name: "Hair Magic",
    },
    time_from: new Date("2024-07-13T16:00:00Z"),
    status: "DONE",
    comment: "nước ấm",
  },
  {
    id: 9,
    user: {
      id: 8,
      full_name: "Nguyễn Thị H",
      avatar: "avatar_url",
    },
    salon: {
      id: 4,
      name: "Luxury Salon",
    },
    time_from: new Date("2024-07-14T14:30:00Z"),
    status: "CANCEL",
    comment: "nước ấm",
  },
  {
    id: 10,
    user: {
      id: 9,
      full_name: "Trần Văn I",
      avatar: "avatar_url",
    },
    salon: {
      id: 5,
      name: "Elegance Spa",
    },
    time_from: new Date("2024-07-15T11:00:00Z"),
    status: "DONE",
    comment: "gội lực nhẹ",
  },
  {
    id: 11,
    user: {
      id: 10,
      full_name: "Lê Thị K",
      avatar: "avatar_url",
    },
    salon: {
      id: 1,
      name: "Chien",
    },
    time_from: new Date("2024-07-16T10:30:00Z"),
    status: "WAITING",
    comment: "nước ấm",
  },
  {
    id: 12,
    user: {
      id: 11,
      full_name: "Nguyễn Văn L",
      avatar: "avatar_url",
    },
    salon: {
      id: 2,
      name: "Spa Beauty",
    },
    time_from: new Date("2024-07-17T15:00:00Z"),
    status: "DONE",
    comment: "gội lực nhẹ",
  },
  {
    id: 13,
    user: {
      id: 12,
      full_name: "Trần Thị M",
      avatar: "avatar_url",
    },
    salon: {
      id: 3,
      name: "Hair Magic",
    },
    time_from: new Date("2024-07-18T13:00:00Z"),
    status: "WAITING",
    comment: "nước ấm",
  },
  {
    id: 14,
    user: {
      id: 13,
      full_name: "Lê Văn N",
      avatar: "avatar_url",
    },
    salon: {
      id: 4,
      name: "Luxury Salon",
    },
    time_from: new Date("2024-07-19T11:30:00Z"),
    status: "CANCEL",
    comment: "nước ấm",
  },
  {
    id: 15,
    user: {
      id: 14,
      full_name: "Phạm Thị O",
      avatar: "avatar_url",
    },
    salon: {
      id: 5,
      name: "Elegance Spa",
    },
    time_from: new Date("2024-07-20T12:30:00Z"),
    status: "DONE",
    comment: "gội lực nhẹ",
  },
  {
    id: 16,
    user: {
      id: 15,
      full_name: "Hoàng Văn P",
      avatar: "avatar_url",
    },
    salon: {
      id: 1,
      name: "Chien",
    },
    time_from: new Date("2024-07-21T14:00:00Z"),
    status: "WAITING",
    comment: "nước ấm",
  },
  {
    id: 17,
    user: {
      id: 16,
      full_name: "Mai Thị Q",
      avatar: "avatar_url",
    },
    salon: {
      id: 2,
      name: "Spa Beauty",
    },
    time_from: new Date("2024-07-22T16:30:00Z"),
    status: "WAITING",
    comment: "gội lực nhẹ",
  },
  {
    id: 18,
    user: {
      id: 17,
      full_name: "Vũ Văn R",
      avatar: "avatar_url",
    },
    salon: {
      id: 3,
      name: "Hair Magic",
    },
    time_from: new Date("2024-07-23T10:30:00Z"),
    status: "DONE",
    comment: "nước ấm",
  },
  {
    id: 19,
    user: {
      id: 18,
      full_name: "Nguyễn Thị S",
      avatar: "avatar_url",
    },
    salon: {
      id: 4,
      name: "Luxury Salon",
    },
    time_from: new Date("2024-07-24T11:00:00Z"),
    status: "CANCEL",
    comment: "nước ấm",
  },
  {
    id: 20,
    user: {
      id: 19,
      full_name: "Trần Văn T",
      avatar: "avatar_url",
    },
    salon: {
      id: 5,
      name: "Elegance Spa",
    },
    time_from: new Date("2024-07-25T14:30:00Z"),
    status: "DONE",
    comment: "gội lực nhẹ",
  },
];

export const mockSalons: Salon[] = [
  { id: 1, name: "Chien" },
  { id: 2, name: "Spa Beauty" },
  { id: 3, name: "Hair Magic" },
  { id: 4, name: "Luxury Salon" },
  { id: 5, name: "Elegance Spa" },
];
