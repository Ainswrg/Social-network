import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Redux/auth-reducer";
import { getAuthUserId, getCurrentUserId } from "../../Redux/auth-selectors";
import { colors, StyledButton, StyledContainer, StyledNavlink } from "./Styles";

export type MapPropsType = {
  // isAuth?: boolean;
  // login?: string | null;
};
export type DispatchPropsType = {
  logout?: () => void;
};

const Header: React.FC<MapPropsType & DispatchPropsType> = () => {

  const isAuth = useSelector(getAuthUserId)
  const login = useSelector(getCurrentUserId)

  const dispatch = useDispatch()
  const logOut = () => {
    dispatch(logout())
  }

  return (
    <StyledContainer
      display='flex'
      items='center'
      padding='0.3rem 1.3rem'
      justify='flex-end'
      bg={colors && colors.black1}
    >
      {isAuth ? (
        <StyledContainer display='flex' direction='column'>
          {isAuth ? (
            <StyledNavlink to={"/profile"}>{login}</StyledNavlink>
          ) : null}
          <StyledButton
            bgColor='transparent'
            padding='0.125rem 0.625rem'
            colorText={colors && colors.dark3}
            onClick={logOut}
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
