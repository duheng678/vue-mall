import axios from "axios";

export function request(config) {
  const instance = axios.create({
    baseURL: "http://", //为了不暴露端口
    timeout: 3000
  });
  instance.interceptors.request.use(
    config => {
      return config;
    },
    err => {
      console.log(err);
    }
  );
  instance.interceptors.response.use(
    res => {
      return res.data;
    },
    err => {
      console.log(err);
    }
  );
  return instance(config);
}
