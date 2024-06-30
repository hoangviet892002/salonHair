export interface User {
  avatar: string;
  email: string;
  role: string;
  token: string;
  username: string;
}
export type SignUpPayload = Omit<User, "avatar" | "role" | "token"> & {
  password: string;
  address: string;
  dateOfBirth: string;
  gender: string;
};
