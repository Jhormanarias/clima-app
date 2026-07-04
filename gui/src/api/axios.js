import axios from "axios";

const axiosFile= axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Accept: "application/json",
  },
});

export default axiosFile;