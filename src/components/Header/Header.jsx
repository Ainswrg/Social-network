import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
   debugger
   return (
      <header className={s.header}>
         <img src="https://i.pinimg.com/originals/2d/0f/50/2d0f50e8e4f6b233c7cf70b4bd36f89c.png" alt="logo"></img>
         <div className={s.loginBlock}>
            {props.isAuth 
               ? props.login
               : <NavLink to={'/login'}>Login</NavLink>}
         </div>
      </header>
   )
}

export default Header;