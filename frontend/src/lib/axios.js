import axios from "axios";

// const baseUrl = import.meta.env.baseUrl;

export const axiosInstance = axios.create({
    baseURL: "http://localhost:5001/api",  // Corrected to baseURL
    withCredentials: true,
});


