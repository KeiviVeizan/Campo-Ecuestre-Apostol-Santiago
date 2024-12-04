import axios from "axios";
import {ip_actual} from "../../Backend/src/configip.js"
const instance = axios.create({
  baseURL: "http://"+ip_actual+":4000/api",
  withCredentials: true,
});
export default instance;
