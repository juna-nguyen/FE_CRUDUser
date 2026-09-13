import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://crud-user-production-f2a5.up.railway.app/api",
  headers: { "Content-Type": "application/json" },
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const message =
      error.response?.data?.message || error.message || "Request failed";
    return Promise.reject(new Error(message));
  },
);
