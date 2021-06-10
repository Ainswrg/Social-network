import React, { Component } from "react";
import "./App.css";
import Music from "./components/Main/Music/Music";
import Settings from "./components/Main/Settings/Settings";
import News from "./components/Main/News/News";
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import DialogsContainer from "./components/Main/Dialogs/DialogsContainer";
import UsersContainer from "./components/Main/Users/UsersContainer";
import ProfileContainer from "./components/Main/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/login/Login";
import { connect, Provider } from "react-redux";
import { compose } from "redux";
import { initializeApp } from "./Redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./Redux/redux-store";

class App extends Component {
   componentDidMount() {
      this.props.initializeApp();
   }

   render() {
      if (!this.props.initialized) {
         return <Preloader />;
      }
      return (
         <div className="app-wrapper" role={"main"}>
            <HeaderContainer />
            <NavbarContainer />
            <div className="app-wrapper-content">
               <Route
                  path="/profile/:userId?"
                  render={() => <ProfileContainer />}
               />

               <Route path="/dialogs" render={() => <DialogsContainer />} />

               <Route path="/news" render={() => <News />} />
               <Route path="/music" render={() => <Music />} />
               <Route path="/settings" render={() => <Settings />} />

               <Route path="/users" render={() => <UsersContainer />} />

               <Route path="/login" render={() => <Login />} />
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

const SocialApp = (props) => {
   return <BrowserRouter>
   <div>Hi</div>
   <React.StrictMode>
      <Provider store={store}>
         <AppContainer />
      </Provider>
   </React.StrictMode>
</BrowserRouter>
} 

export default SocialApp;