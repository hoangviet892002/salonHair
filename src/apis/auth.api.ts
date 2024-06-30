import http from "../utils/http";
export const signIn = async (username: string, password: string) => {
  return http.post("/account/sign-up", { username, password });
};
export const signUp = async (
  username: string,
  password: string,
  email: string,
  address: string,
  dateOfBirth: string,
  gender: string
) => {
  return http.post("/account/sign-up", {
    address,
    dateOfBirth,
    email,
    gender,
    username,
    password,
  });
};
