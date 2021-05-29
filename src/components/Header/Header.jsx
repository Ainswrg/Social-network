import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
import avatar from "../../assets/img/avatar.png";
import logo from "../../assets/img/logo.png";
import { useDispatch } from "react-redux";
import { logout } from "../../Redux/auth-reducer";

const Header = (props) => {
   const dispatch = useDispatch();
   const logOutThunk = () => dispatch(logout());

   return (
      <header className={s.header}>
         <img src={logo} alt="logo"></img>
         <div className={s.loginBlock}>
            <div className={s.ava}>
               {props.isAuth ? (
                  <div className={s.auth}>
                     <img src={avatar} className={s.logo} alt="logo" />
                     {props.isAuth ? (
                        <NavLink to={"/profile"}>{props.login}</NavLink>
                     ) : null}
                     <div className={s.logout} onClick={logOutThunk}>
                        log out
                     </div>
                  </div>
               ) : (
                  <div className={s.auth}>
                     <NavLink to={"/login"}>Log in</NavLink>
                  </div>
               )}
            </div>
            {/* {props.isAuth 
               ? null
               : <NavLink to={"/login"}>Log in</NavLink>
            } */}
            {/* {props.isAuth 
               ? 
               : null
            } */}
         </div>
      </header>
   );
};

export default Header;
