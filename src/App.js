import React, { Component } from "react";
import "./App.css";
import Music from "./components/Main/Music/Music";
import Settings from "./components/Main/Settings/Settings";
import News from "./components/Main/News/News";
import { BrowserRouter, Redirect, Route, Switch, withRouter } from "react-router-dom";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Main/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
// import "./assets/styles.css"
import Login from "./components/login/Login";
import { connect, Provider } from "react-redux";
import { compose } from "redux";
import { initializeApp } from "./Redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./Redux/redux-store";
import { withSuspense } from "./hoc/withSuspense";


const DialogsContainer = React.lazy(() => import('./components/Main/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Main/Profile/ProfileContainer'));


class App extends Component {
   catchAllUnhandleErrors = (reason, promise) => {
      alert("some error occured");
      // console.error(promiseRejectionEvent)
   }
   componentDidMount() {
      this.props.initializeApp();
      window.addEventListener("unhandledrejection", this.catchAllUnhandleErrors);
   }

   componentWillUnmount() {
      window.removeEventListener("unhandledrejection", this.catchAllUnhandleErrors);
   }

   render() {
      if (!this.props.initialized) {
         return <Preloader />;
      }
      return (
         <div role={"main"}>
            <HeaderContainer />
            <NavbarContainer />
            <div className="app-wrapper-content">
               <Switch>
                  
                  <Route path="/dialogs" 
                     render={withSuspense(DialogsContainer)}/>
                  
                  <Route path="/profile/:userId?" 
                     render={withSuspense(ProfileContainer)}/>

                  <Redirect exact from='/' to="/profile"/>

                  <Route path="/news" render={() => <News />} />
                  <Route path="/music" render={() => <Music />} />
                  <Route path="/settings" render={() => <Settings />} />

                  <Route path="/users" render={() => <UsersContainer />} />

                  <Route path="/login" render={() => <Login />} />

                  <Route path="*" render={() => <div>404 NOT FOUND</div>} />
               </Switch>
            </div>
         </div>
      );
   }
}

const mapStateToProps = (state) => ({
   initialized: state.app.initialized,
});

let AppContainer =  compose(
   withRouter,
   connect(mapStateToProps, {
      initializeApp,
   })
)(App);

const SocialApp = () => {
   return <BrowserRouter>
   <React.StrictMode>
      <Provider store={store}>
         <AppContainer />
      </Provider>
   </React.StrictMode>
</BrowserRouter>
} 

export default SocialApp;