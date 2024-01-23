import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://ranek.local/wp-json/api",
});

export const api = {
  get(endpoint) {
    return axiosInstance.get(endpoint);
  },
  post(endpoint, body) {
    return axiosInstance.post(endpoint, body);
  },
  put(endpoint, body) {
    return axiosInstance.put(endpoint, body);
  },
  delete(endpoint) {
    return axiosInstance.delete(endpoint);
  },
  login(body) {
    return axios.post(url + "/jwt-auth/v1/token", body);
  },
  validateToken() {
    return axiosInstance.post(url + "/jwt-auth/v1/toke/validate");
  },
};
