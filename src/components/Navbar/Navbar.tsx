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
  StyledContainer,
  SlickBar,
  Text,
  Avatar,
  colors,
} from "./Styles";
import { NavLink } from "react-router-dom";
import avatar from "../../assets/img/avatar.png";
import { useDispatch, useSelector } from "react-redux";
import { AppStateType } from "../../Redux/redux-store";
import { InitialNavStateAction } from "../../Redux/sideBar-reducer";
import { ProfileType } from "../../types/Types";
import { logout } from "../../Redux/auth-reducer";

const Navbar = () => {
  const login: string | null = useSelector(
    (state: AppStateType) => state.auth.login
  );
  const sideBar: InitialNavStateAction = useSelector(
    (state: AppStateType) => state.sideBar
  );
  const isAuth: boolean = useSelector(
    (state: AppStateType) => state.auth.isAuth
  );
  const profile: ProfileType | null = useSelector(
    (state: AppStateType) => state.profilePage.profile
  );

  const dispatch = useDispatch();

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [profileClick, setProfileClick] = useState(false);
  const handleProfileClick = () => setProfileClick(!profileClick);

  return (
    <Container>
      <MenuButton clicked={click} onClick={() => handleClick()}></MenuButton>
      <StyledContainer
        bg={colors && colors.black1}
        width='3.5rem'
        height='80vh'
        margin='1rem 0 0 0'
        padding='1rem 0'
        display='flex'
        direction='column'
        items='center'
        justify='space-between'
        position='relative'
        rounded='0 1rem 1rem 0'
      >
        <Logo>
          <img src={logo} alt='logo' />
        </Logo>
        <SlickBar clicked={click}>
          {sideBar.menu.map((item) => (
            <Item
              onClick={() => setClick(false)}
              exact
              activeClassName='active'
              to={item.id}
            >
              <img src={item.src} alt='home' />
              <Text clicked={click}>{item.name}</Text>
            </Item>
          ))}
        </SlickBar>

        <Profile onClick={() => handleProfileClick()} clicked={profileClick}>
          {isAuth ? (
            <div>
              <Avatar
                width={"2.5rem"}
                className='ava'
                src={profile?.photos?.small || avatar}
                alt='logo'
                onClick={() => handleProfileClick()}
              />
            </div>
          ) : (
            <NavLink style={{ border: "none" }} to='/login'>
              <img
                src={LogInIcon}
                alt='login'
                onClick={() => handleProfileClick()}
              />
            </NavLink>
          )}

          <Details isAuth={isAuth} clicked={profileClick}>
            <Name>
              <h4>{login}</h4>
              <NavLink id='view' to='/profile'>
                view&nbsp;profile
              </NavLink>
            </Name>
            <Logout onClick={() => dispatch(logout())}>
              <img id='logOut' src={LogOut} alt='logout' />
            </Logout>
          </Details>
        </Profile>
      </StyledContainer>
    </Container>
  );
};

export default Navbar;
