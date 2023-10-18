import { getAppTheme, setAppTheme } from '@/services/app-theme';

export const bootstrapApp = () => {
  setAppTheme(getAppTheme());
};
