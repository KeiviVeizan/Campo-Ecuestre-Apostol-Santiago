import axios from "axios";
const instance = axios.create({
  baseURL: "http://172.174.1.223:4000/api",
  withCredentials: true,
});
export default instance;
