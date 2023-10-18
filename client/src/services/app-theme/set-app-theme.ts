export const setAppTheme = (themeName: string): void => {
  document.getElementsByTagName('body')[0].setAttribute('theme', themeName);
};
