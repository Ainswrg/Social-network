import { connect } from 'react-redux';
import Navbar from './Navbar';
import { logout } from "../../Redux/auth-reducer";

let mapStateToProps = (state) => {
   return {
      sideBar: state.sideBar,
      login: state.auth.login,
      isAuth: state.auth.isAuth,
      profile: state.profilePage.profile,
   }
}

const NavbarContainer = connect(mapStateToProps, {logout})(Navbar);

export default NavbarContainer;