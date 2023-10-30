import https from './configURL';

export const userServices = {
  login: async (loginData, progressCallback = null) => {
    return https.post('QuanLyNguoiDung/DangNhap', loginData, {
      onUploadProgress: (progressEvent) => {
        progressCallback && progressCallback(progressEvent);
      },
    });
  },
  signup: async (signupData, progressCallback = null) => {
    return https.post('QuanLyNguoiDung/DangKy', signupData, {
      onUploadProgress: (progressEvent) => {
        progressCallback && progressCallback(progressEvent);
      },
    });
  },
  getUserDetail: async () => {
    const response = await https.post('QuanLyNguoiDung/ThongTinNguoiDung');
    return response.data;
  },
  updateUserInformation: async (updateData) => {
    const response = await https.put(
      'QuanLyNguoiDung/CapNhatThongTinNguoiDung',
      updateData
    );
    return response.data;
  },
};
