import React from 'react';
import StoreContext from '../../StoreContext';
import Menu from './Menu/Menu';
import Navbar from './Navbar';

const NavbarContainer = (props) => {

   return (
      <StoreContext.Consumer>
         {
            (store) => {
               let state = store.getState().sideBar;
               return <Navbar sideBar={state} />
            }
         }
      </StoreContext.Consumer>
   )
}

export default NavbarContainer;