export const saveAppThemeLocal = (themeName: string) => {
  localStorage.setItem('themeName', themeName);
};