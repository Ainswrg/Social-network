import Friends from './Friends/Friends';
import Menu from './Menu/Menu';
import s from './Navbar.module.css';

const Navbar = (props) => {
   let menuElements = props.state.menu.map(m => < Menu name={m.name} id={m.id} />);
   return (
      <nav className={s.nav}>
         {menuElements}
         <Friends />
      </nav>
   )
}

export default Navbar;