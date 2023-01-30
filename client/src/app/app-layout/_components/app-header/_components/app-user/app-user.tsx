import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Button,
  ButtonMouseEvent,
  DropdownList,
  DropdownItemParams,
} from "@artemelka/react-components";
import { AppStore } from '@/app';
import {
  authLoginActionSaga,
  authLogoutActionSaga,
  authLoginIsLoadingSelector,
  authUserSelector,
  isLoginSelector,
} from '@/redux';
import { fastClassNames } from '@/utils';
import style from './app-user.module.scss';

const cn = fastClassNames(style);
const CLASS_NAME = 'App-user';
const ITEMS: Array<DropdownItemParams> = [
  {
    id: 1,
    value: 'logOut',
  },
];

const mapStateToProps = (state: AppStore) => ({
  isLoginLoading: authLoginIsLoadingSelector(state),
  isLogin: isLoginSelector(state),
  user: authUserSelector(state),
});

const mapDispatchToProps = {
  login: authLoginActionSaga,
  logout: authLogoutActionSaga,
};

type AppUserProps = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

type State = {
  isOpen: boolean;
}

export class AppUserContainer extends Component<AppUserProps, State> {
  constructor(props: AppUserProps) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  componentDidMount() {
    window.addEventListener('click', this.handleCloseDropdown);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleCloseDropdown)
  }

  handleCloseDropdown = () => {
    if (this.state.isOpen) {
      this.setState({ isOpen: false });
    }
  }

  handleListClick = () => {
    this.props.logout();
  }

  handleButtonClick = ({ event }: ButtonMouseEvent) => {
    event.stopPropagation();

    if (this.props.isLogin) {
      this.setState(({ isOpen }) => ({ isOpen: !isOpen }));
      return;
    }

    this.props.login();
  };

  render() {
    return (
      <div className={cn(CLASS_NAME)}>
        <Button
          onClick={this.handleButtonClick}
          value={this.props.user.name || 'login'}
          disabled={this.props.isLoginLoading}
        />
        {this.state.isOpen && this.props.isLogin && (
          <div className={cn(`${CLASS_NAME}__dropdown`)}>
            <DropdownList
              items={ITEMS}
              onClick={this.handleListClick}
              size="small"
            />
          </div>
        )}
      </div>
    );
  }
}

export const AppUser = connect(mapStateToProps, mapDispatchToProps)(AppUserContainer);