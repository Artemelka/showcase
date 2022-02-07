
export const AUTH = {
  INIT: () => new Promise((resolve) => {
    setTimeout(() => {
      resolve({ isLogin: true, role: 'user' })
    }, 2000);
  })
};