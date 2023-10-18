export const saveAppThemeLocal = (themeName: string): void => {
  localStorage.setItem('themeName', themeName);
};
