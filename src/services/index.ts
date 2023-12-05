import { Axios } from "axios";
import users from "./users";
import auth from "./auth";
import applications from "./applications";

export const instance = new Axios({
  baseURL: "http://127.0.0.1:8000/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.response.use(
  (response) => {
    if (response.status == 403) {
      localStorage.setItem("is_authenticated", "");
    }
    return response;
  },
  (err) => {
    return Promise.reject(err);
  }
);

instance.interceptors.request.use(
  (config) => {
    const access_token = localStorage.getItem("access_token");

    if (access_token) {
      config.headers.Authorization = `Bearer ${access_token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const Api = {
  users: users,
  auth: auth,
  apps: applications,
};

export default Api;
