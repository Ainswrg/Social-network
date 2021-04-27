import React from 'react';
import { connect } from 'react-redux';
import Navbar from './Navbar';


let mapStateToProps = (state) => {
   return {
      sideBar:state.sideBar,
   }
}

const NavbarContainer = connect(mapStateToProps)(Navbar);

export default NavbarContainer;