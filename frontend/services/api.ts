import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000", // ou http://localhost:8000
  withCredentials: false, // ou true, se usar cookies/sessão
});

export default api;
