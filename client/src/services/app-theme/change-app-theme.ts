import { saveAppThemeLocal } from './save-app-theme-local';
import { setAppTheme } from './set-app-theme';

export const changeAppTheme = (themeName: string) => {
  saveAppThemeLocal(themeName);
  setAppTheme(themeName);
};