import avatar from "../../assets/img/avatar.png";
import {
   Avatar,
   colors,
   StyledButton,
   StyledContainer,
   StyledNavlink,
} from "../Styles";

const Header = ({ isAuth, login, logout, profile }) => {
   return (
      <StyledContainer
         display="flex"
         items="center"
         padding="0.3rem 1.3rem"
         justify="flex-end"
         bg={colors && colors.black1}
      >
         {isAuth ? (
            <StyledContainer display="flex" direction="column">
               <Avatar
                  src={profile ? profile.photos.small : avatar}
                  alt="logo"
                  width="3rem"
                  margin="0.5rem auto 0"
               />
               {isAuth ? <StyledNavlink to={"/profile"}>{login}</StyledNavlink> : null}
               <StyledButton
                  bgColor="transparent"
                  padding="0.125rem 0.625rem"
                  colorText={colors && colors.dark3}
                  onClick={logout}
               >
                  log&nbsp;out
               </StyledButton>
            </StyledContainer>
         ) : (
            <StyledNavlink to={"/login"}>Log&nbsp;in</StyledNavlink>
         )}
      </StyledContainer>
   );
};

export default Header;
