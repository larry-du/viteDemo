import axios from "axios";

const mainApi = axios.create({
  baseURL: "apiURL",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
export default mainApi;
