import React, { useState } from "react";

import logo from "../../assets/sidebar/logo.svg";
import LogOut from "../../assets/sidebar/bx-log-out.svg";
import LogInIcon from "../../assets/sidebar/bx-log-in.svg";
import {
   MenuButton,
   Container,
   Details,
   Item,
   Logo,
   Logout,
   Name,
   Profile,
   SidebarContainer,
   SlickBar,
   Text,
   Avatar,
} from "../Styles";
import { NavLink } from "react-router-dom";
import avatar from "../../assets/img/avatar.png";

const Navbar = ({ login, sideBar, isAuth, profile, logout }) => {
   const [click, setClick] = useState(false);
   const handleClick = () => setClick(!click);

   const [profileClick, setProfileClick] = useState(false);
   const handleProfileClick = () => setProfileClick(!profileClick);

   return (
      <Container>
         <MenuButton clicked={click} onClick={() => handleClick()}></MenuButton>
         <SidebarContainer>
            <Logo>
               <img src={logo} alt="logo" />
            </Logo>
            <SlickBar clicked={click}>
               {sideBar.menu.map((item) => (
                  <Item
                     onClick={() => setClick(false)}
                     exact
                     activeClassName="active"
                     to={item.id}
                  >
                     <img src={item.src} alt="home" />
                     <Text clicked={click}>{item.name}</Text>
                  </Item>
               ))}
            </SlickBar>

            <Profile
               onClick={() => handleProfileClick()}
               clicked={profileClick}
            >
               {isAuth ? (
                  <div>
                     <Avatar
                        width={"2.5rem"}
                        className="ava"
                        src={profile ? profile.photos.small : avatar}
                        alt="logo"
                        onClick={() => handleProfileClick()}
                     />
                  </div>
               ) : (
                  <NavLink style={{ border: "none" }} to="/login">
                     <img
                        src={LogInIcon}
                        alt="login"
                        onClick={() => handleProfileClick()}
                     />
                  </NavLink>
               )}

               <Details isAuth={isAuth} clicked={profileClick}>
                  <Name>
                     <h4>{login}</h4>
                     <NavLink id="view" to="/profile">
                        view&nbsp;profile
                     </NavLink>
                  </Name>
                  <Logout onClick={logout}>
                     <img id="logOut" src={LogOut} alt="logout" />
                  </Logout>
               </Details>
            </Profile>
         </SidebarContainer>
      </Container>
   );
};

export default Navbar;
