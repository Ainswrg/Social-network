import React from 'react';
import { connect } from 'react-redux';
import Navbar from './Navbar';

// const NavbarContainer = (props) => {

//    return (
//       <StoreContext.Consumer>
//          {
//             (store) => {
//                let state = store.getState().sideBar;
//                return <Navbar sideBar={state} />
//             }
//          }
//       </StoreContext.Consumer>
//    )
// }

let mapStateToProps = (state) => {
   return {
      sideBar:state.sideBar,
   }
}

const NavbarContainer = connect(mapStateToProps)(Navbar);

export default NavbarContainer;