import axios from 'axios';
import {localServices} from './localServices';

const https = axios.create({
  baseURL: 'https://elearningnew.cybersoft.edu.vn/api/',
  headers: {
    TokenCybersoft: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1MiIsIkhldEhhblN0cmluZyI6IjI4LzAyLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcwOTA3ODQwMDAwMCIsIm5iZiI6MTY4MTE0NjAwMCwiZXhwIjoxNzA5MjI2MDAwfQ.GboZ7OZlrOvJ_T6lEZ9PfGJD8vygDn30BxaLgB43WbM",
  },
});

https.interceptors.request.use(function (config) {
  const needBearerTokenUrl = [
    'QuanLyNguoiDung/XoaNguoiDung',
    'QuanLyNguoiDung/CapNhatThongTinNguoiDung',
    'QuanLyNguoiDung/ThemNguoiDung',
    'QuanLyNguoiDung/ThongTinNguoiDung',
    'QuanLyKhoaHoc/DangKyKhoaHoc',
    'QuanLyKhoaHoc/HuyGhiDanh',
  ];

  if (
    config.url &&
    needBearerTokenUrl.includes(config.url) &&
    (config.method === 'post' ||
      config.method === 'delete' ||
      config.method === 'put')
  ) {
    config.headers = {
      ...config.headers,
      Authorization: 'Bearer ' + localServices.user.get()?.accessToken,
    };
  }
  return config;
});
export default https;
