import axios from "axios";
const instance = axios.create({
  baseURL: "http://192.168.0.204:4000/api",
  withCredentials: true,
});
export default instance;
