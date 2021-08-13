import './App.css';

import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { compose } from 'redux';

import Preloader from './components/common/Preloader/Preloader';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/login/Login';
import Music from './components/Main/Music/Music';
import News from './components/Main/News/News';
import Settings from './components/Main/Settings/Settings';
import { UsersPage } from './components/Main/Users/UsersContainer';
import Navbar from './components/Navbar/Navbar';
import { withSuspense } from './hoc/withSuspense';
import { initializeApp } from './Redux/app-reducer';
import store, { AppStateType } from './Redux/redux-store';

const DialogsContainer = React.lazy(
  () => import("./components/Main/Dialogs/DialogsContainer")
);
const ProfileContainer = React.lazy(
  () => import("./components/Main/Profile/ProfileContainer")
);

type MapPropsType = ReturnType<typeof mapStateToProps>;
type DispatchPropsType = {
  initializeApp: () => void;
};

const SuspendedDialogs = withSuspense(DialogsContainer);
const SuspendedProfile = withSuspense(ProfileContainer);

class App extends Component<MapPropsType & DispatchPropsType> {
  catchAllUnhandleErrors = (e: PromiseRejectionEvent) => {
    alert("some error occured");
  };
  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener("unhandledrejection", this.catchAllUnhandleErrors);
  }

  componentWillUnmount() {
    window.removeEventListener(
      "unhandledrejection",
      this.catchAllUnhandleErrors
    );
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      <div role={"main"}>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Switch>
            <Route path='/dialogs' render={() => <SuspendedDialogs />} />

            <Route
              path='/profile/:userId?'
              render={() => <SuspendedProfile />}
            />

            <Redirect exact from='/' to='/profile' />

            <Route path='/news' render={() => <News />} />
            <Route path='/music' render={() => <Music />} />
            <Route path='/settings' render={() => <Settings />} />

            <Route
              path='/users'
              render={() => <UsersPage pageTitle={"Samurai"} />}
            />

            <Route path='/login' render={() => <Login />} />

            <Route path='*' render={() => <div>404 NOT FOUND</div>} />
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: AppStateType) => ({
  initialized: state.app.initialized,
});

let AppContainer = compose<React.ComponentType>(
  withRouter,
  connect(mapStateToProps, {
    initializeApp,
  })
)(App);

const SocialApp: React.FC = () => {
  return (
    <BrowserRouter>
      <React.StrictMode>
        <Provider store={store}>
          <AppContainer />
        </Provider>
      </React.StrictMode>
    </BrowserRouter>
  );
};

export default SocialApp;
