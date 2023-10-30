import https from './configURL';

const adminServices = {
  getUserList: async () => {
    let response = await https.get(
      'QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01'
    );
    return response.data;
  },
  deleteUser: (taiKhoan) => {
    return https.delete(`QuanLyNguoiDung/XoaNguoiDung`, {
      params: {
        TaiKhoan: taiKhoan,
      },
    });
  },
  editUserInformation: async (editData) => {
    return await https.put(
      'QuanLyNguoiDung/CapNhatThongTinNguoiDung',
      editData
    );
  },
  addUser: async (data) => {
    return await https.post('QuanLyNguoiDung/ThemNguoiDung', data);
  },
};
export default adminServices;
