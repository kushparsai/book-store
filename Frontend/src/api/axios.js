import axios from "axios";

const api = axios.create({
  baseURL: "https://book-store-yiw7.onrender.com",
  withCredentials: true,
});

export default api;
