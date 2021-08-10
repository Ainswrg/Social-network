import { ImageType } from "./../helpers/ImageType";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { NavLink } from "react-router-dom";
import { ButtonType, SpanType, UlType } from "../helpers/ButtonType";
import { PageType } from "../helpers/PageType";

export const colors = {
  primary: "#fff",
  theme: "#BE185D",
  light: "#f6f7f9",
  light1: "#F3F4F6",
  light2: "#E5E7EB",
  light3: "#f4f3f8",
  dark1: "#1F2937",
  dark2: "#4B5563",
  dark3: "#9CA3AF",
  dark4: "#2D3748",
  red: "#DC2626",
  blue1: "#4169E1",
  blue2: "#ebe7fb",
  blue3: "#03e9f4",
  blue4: "#1b86f9",
  blue500: "rgba(59, 130, 246, 1)",
  black1: "#151728",
  rgba: "rgba(0,0,0,.5)",
};

//? Header
//?===========================================================================
export const StyledContainer = styled(PageType)`
  background: ${({ bg }) => bg && bg};
  height: ${({ height }) => height && height};
  width: ${({ width }) => width && width};
  margin: ${({ margin }) => (margin ? margin : "0")};
  padding: ${({ padding }) => (padding ? padding : "0")};
  display: ${({ display }) => display && display};
  flex-direction: ${({ direction }) => direction && direction};
  max-width: ${({ maxW }) => maxW && maxW};
  min-width: ${({ mixW }) => mixW && mixW};
  flex-grow: ${({ grow }) => grow && grow};
  justify-content: ${({ justify }) => justify && justify};
  align-items: ${({ items }) => items && items};
  position: ${({ position }) => position && position};
  border-radius: ${({ rounded }) => rounded && rounded};
  box-shadow: ${({ shadow }) => shadow && shadow};
  z-index: ${({ z }) => z && z};
  ${(props) =>
    props.primary &&
    css`
      ${tw`sm:flex-row md:justify-around lg:justify-start`}
    `}
  ${(props) =>
    props.active &&
    css`
      ${tw`sm:flex-row md:justify-around lg:justify-start`}
    `}
`;

//? sideBar
//?===========================================================================
export const Container = styled.div`
  ${tw`fixed z-50`}
  .active {
    border-right: 4px solid ${colors.primary};

    img {
      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
        brightness(105%) contrast(102%);
    }
  }
`;

export const MenuButton = styled(ButtonType)`
  ${tw`bg-black1 border-none w-10 h-10 rounded-full mt-2 ml-2 cursor-pointer flex justify-center items-center relative`}

  &::before,
    &::after {
    content: "";
    transition: all 0.3s ease;
    ${tw`absolute bg-white w-4 h-0.5`}
  }

  &::before {
    top: ${(props) => (props.clicked ? "1.5" : "1rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }

  &::after {
    top: ${(props) => (props.clicked ? "1.2" : "1.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
`;

export const Logo = styled.div`
  width: 2rem;

  img {
    width: 100%;
    height: auto;
  }
`;

export const SlickBar = styled(UlType)`
  ${tw`text-white bg-black1 list-none flex flex-col items-center absolute top-24 left-0 py-8`}

  width: ${(props) => (props.clicked ? "12rem" : "3.5rem")};
  transition: all 0.5s ease;
  border-radius: 0 30px 30px 0;
`;

export const Item = styled(NavLink)`
  ${tw`no-underline text-white w-full py-4 cursor-pointer flex pl-4`}

  &:hover {
    border-right: 4px solid ${colors.primary};

    img {
      filter: invert(100%) sepia(25%) saturate(1%) hue-rotate(40deg)
        brightness(105%) contrast(102%);
    }
  }

  img {
    width: 1.2rem;
    height: auto;
    filter: invert(75%) sepia(10%) saturate(366%) hue-rotate(162deg)
      brightness(96%) contrast(83%);
  }
`;

export const Text = styled(SpanType)`
  width: ${(props) => (props.clicked ? "100%" : "0")};
  overflow: hidden;
  margin-left: ${(props) => (props.clicked ? "1.5rem" : "0")};
  transition: all 0.3s ease;
  color: ${colors.dark3};
  &:hover {
    color: ${colors.primary};
  }
`;

export const Profile = styled(PageType)`
  ${tw`h-12 py-2 px-4 rounded-2xl flex items-center justify-center bg-black1 text-white`}

  width: ${(props) => (props.clicked ? "14rem" : "3rem")};
  margin-left: ${(props) => (props.clicked ? "10rem" : "0")};
  transition: all 0.3s ease;
`;

export const Details = styled(PageType)`
  opacity: ${(props) => (props.isAuth ? "1" : "0")};
  display: ${(props) => (props.clicked ? "flex" : "none")};
  justify-content: space-between;
  align-items: center;
`;

export const Name = styled.div`
  ${tw`px-6 flex flex-col justify-center items-center`}

  h4 {
    display: inline-block;
  }

  #view {
    ${tw`text-sm no-underline text-gray2 border-none hover:underline`}
  }
`;

export const Logout = styled(ButtonType)`
  ${tw`border-none w-8 h-8  bg-transparent flex justify-center items-center cursor-pointer`}

  #logOut {
    transition: all 0.3s ease;

    &:hover {
      ${tw`border-none p-0 opacity-50 text-black`}
    }
  }
`;

export const Pages = styled.div`
  ${tw`w-screen h-screen flex justify-center items-center`}

  h1 {
    font-size: calc(2rem + 2vw);
    background: linear-gradient(to right, #803bec 30%, #1b1b1b 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const Avatar = styled(ImageType)`
  ${tw`rounded-full border border-solid border-gray1 transition ease-out cursor-pointer`};
  width: ${({ width }) => (width ? width : "5rem")};
  margin: ${({ margin }) => margin && margin};
  &:hover {
    ${tw`transform scale-105 border-2 border-blue4 shadow-cstblue`}
    border: 2px solid ${colors.dark3};
    padding: 2px;
  }
`;
