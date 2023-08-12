import axios, { AxiosInstance } from "axios";

const request: AxiosInstance = axios.create({
  baseURL: `${process.env.BASE_URL}/api`,
});

export default request;
