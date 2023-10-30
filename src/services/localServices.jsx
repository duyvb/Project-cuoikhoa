let USER = 'USER';

export const localServices = {
  user: {
    set: (loginData) => {
      localStorage.setItem(USER, JSON.stringify(loginData));
    },
    get: () => {
      let userData = localStorage.getItem(USER);
      return userData ? JSON.parse(userData) : null;
    },
    remove: () => {
      localStorage.removeItem(USER);
    },
  },
};
