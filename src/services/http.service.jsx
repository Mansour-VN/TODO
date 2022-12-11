import axios from "axios";
import { BASE_URL } from "config/variable";

class HttpService {
  constructor() {
    axios.defaults.baseURL = BASE_URL;
    axios.interceptors.request.use(
      (config) => {
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }

  get(url, config) {
    return axios.get(url, config);
  }

  post(url, data, config) {
    return axios.get(url, data, config);
  }

  put(url, data, config) {
    return axios.get(url, data, config);
  }

  patch(url, data, config) {
    return axios.get(url, data, config);
  }

  delete(url, config) {
    return axios.get(url, config);
  }
}

export default new HttpService();
