import axios from "axios";

const api = axios.create({
  baseURL: "https://books.ioasys.com.br/api/docs/#/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default api;