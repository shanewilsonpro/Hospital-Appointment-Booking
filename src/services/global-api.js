import axios from "axios";

const BASE_URL = `http://${process.env.EXPO_PUBLIC_BASE_URL}:1337/api`;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: "Bearer " + process.env.EXPO_PUBLIC_STRAPI_API_KEY,
  },
});

const getSlider = () => axiosInstance.get("/sliders?populate=*");

const getCategories = () => axiosInstance.get("/categories?populate=*");

export default { getSlider, getCategories };
