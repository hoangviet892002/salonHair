import { ProfilePayload, User } from "@/types/user.type";
import http from "../utils/http";
import { ResponseType } from "@/types/response.type";
export const signIn = async (
  username: string,
  password: string
): Promise<ResponseType<User>> => {
  const response = await http.post("/account/sign-in", { username, password });
  return response.data;
};
export const signUp = async (
  username: string,
  password: string,
  email: string,
  gender: string
): Promise<ResponseType<User>> => {
  const response = await http.post("/account/sign-up", {
    email,
    gender,
    username,
    password,
  });
  return response.data;
};
export const getProfile = async (): Promise<ResponseType<ProfilePayload>> => {
  const response = await http.get("/account/profile");
  return response.data;
};
