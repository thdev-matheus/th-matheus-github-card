import axios from "axios";

export const reqRepo = axios.create({
  baseURL: "https://api.github.com/repos",
  timeout: 12000,
});
