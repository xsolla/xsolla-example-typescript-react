import axios from "axios";

export const api = (authToken: string) =>
  axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    timeout: 10000,
    headers: {
      Authorization: authToken && `Bearer ${authToken}`,
    },
  });
