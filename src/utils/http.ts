import axios, { AxiosInstance } from "axios";
class Http {
  instance: AxiosInstance;
  constructor() {
    this.instance = axios.create({
      baseURL: "https://hair-booking.fly.dev/",
      timeout: 1000,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
const http = new Http().instance;
export default http;
