import https from './configURL';

const coursesServices = {
  getCoursesList: async () => {
    let response = await https.get(
      'QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01'
    );
    return response.data;
  },
  getCourseCategories: async () => {
    let response = await https.get('QuanLyKhoaHoc/LayDanhMucKhoaHoc');
    return response.data;
  },
  getCourseDetail: async (id) => {
    let response = await https.get(
      `QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${id}`
    );
    return response.data;
  },
  getSearchCoursesResult: async (searchData) => {
    let response = await https.get(
      `QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${encodeURI(
        searchData
      )}&MaNhom=GP01`
    );
    return response.data;
  },
  getCoursesListByCategory: async (categoryId) => {
    let response = await https.get(
      `QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${categoryId}&MaNhom=GP01`
    );
    return response.data;
  },
  registerCourse: async (registerData) => {
    let response = await https.post(
      'QuanLyKhoaHoc/DangKyKhoaHoc',
      registerData
    );
    return response.data;
  },
  cancelCourse: async (cancelData) => {
    let response = await https.post('QuanLyKhoaHoc/HuyGhiDanh', cancelData);
    return response.data;
  },
};

export default coursesServices;
