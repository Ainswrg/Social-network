import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
import avatar from '../../assets/img/avatar.png';
import logo from '../../assets/img/logo.png';
import { useDispatch } from "react-redux";
import {logout} from '../../Redux/auth-reducer'


const Header = (props) => {
   const dispatch = useDispatch();
   const logOutThunk = () => dispatch(logout());
   return (
      
      <header className={s.header}>
         <img
            src={logo}
            alt="logo"
         ></img>
         <div className={s.loginBlock}>
            <div className={s.ava}>
               {props.isAuth
                  ? <img
                     src={ avatar }
                     className={s.logo}
                     alt="logo"/> 
                  : null}
            </div>
            {props.isAuth 
               ? <NavLink to={"/profile"}>{props.login}</NavLink>
               : <NavLink to={"/login"}>Log in</NavLink>
            }
            {props.isAuth 
               ? <div className={s.logout} onClick={logOutThunk}>log out</div>
               : null
            }
            
         </div>
         
      </header>
   );
};

export default Header;
