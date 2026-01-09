import axios from "axios";

const api = axios.create({
  baseURL: "https://book-store-yiw7.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
