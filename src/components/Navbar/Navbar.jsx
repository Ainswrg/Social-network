import React from 'react';
import Friends from './Friends/Friends';
import Menu from './Menu/Menu';
import s from './Navbar.module.css';

const Navbar = (props) => {
   let menuElements = props.sideBar.menu.map(m => < Menu name={m.name} key={m.id} id={m.id} />);
   return (
      <nav className={s.nav}>
         {menuElements}
         <Friends />
      </nav>
   )
}

export default Navbar;