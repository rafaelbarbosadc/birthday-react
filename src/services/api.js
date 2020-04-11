import axios from "axios";

const api = axios.create({
  baseURL: "https://camile-birthday.herokuapp.com",
});

export default api;
