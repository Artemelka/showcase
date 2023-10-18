import React, { PureComponent } from 'react';
import { Label, Toggle, ToggleChangeEvent } from '@artemelka/react-components';
import { getAppTheme, changeAppTheme } from '@/services/app-theme';

type ThemeToggleProps = Record<string, never>;
type State = {
  themeName: string;
};

export class ThemeToggle extends PureComponent<ThemeToggleProps, State> {
  constructor(props: ThemeToggleProps) {
    super(props);

    this.state = {
      themeName: getAppTheme(),
    };
  }

  handleThemeChange = ({ checked }: ToggleChangeEvent) => {
    const themeName = checked ? 'dark' : 'light';

    this.setState({ themeName });
    changeAppTheme(themeName);
  };

  render() {
    return (
      <>
        <Label
          htmlFor="theme-toggle"
          position="left"
          size="small"
          themeColor="primary"
        >
          Dark theme
        </Label>
        <Toggle
          checked={this.state.themeName === 'dark'}
          id="theme-toggle"
          name="theme-toggle"
          onChange={this.handleThemeChange}
          size="small"
          themeColor="primary"
        />
      </>
    );
  }
}
