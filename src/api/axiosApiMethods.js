import axios from "axios";
import CONFIG from "../helpers/config";

const token = localStorage.getItem("token");
const axiosInstance = axios.create({
  baseURL: CONFIG.BASE_URL,
});

axiosInstance.interceptors.request.use(
  function (config) {
    config.headers = {
      ...config.headers,
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
    };
    // you can also do other modification in config
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
export const getData = async (url) => {
  try {
    const data = await axiosInstance({
      method: "GET",
      url,
    });
    return data.data;
  } catch (error) {
    return error;
  }
};

export const getDataWithoutToken = async (url, prodOnly) => {
  try {
    const data = await axios({
      method: "GET",
      url: `${CONFIG.BASE_URL}${url}`,
      headers: {
        "Content-Type": "application/json",
      },
    });
    return data.data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      sessionStorage.clear();
      window.location.href = "/login";
    } else {
      return error;
    }
  }
};

export const postData = async (url, reqBody) => {
  const data = await axiosInstance({
    method: "POST",
    url,
    data: reqBody,
  });
  return data.data;
};

export const postDataWithoutToken = async (url, reqBody) => {
  const data = await axios({
    method: "POST",
    url: `${CONFIG.BASE_URL}${url}`,
    data: reqBody,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return data.data;
};
