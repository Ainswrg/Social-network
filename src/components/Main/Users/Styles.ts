import { Item } from "./../../Navbar/Styles";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { NavLink } from "react-router-dom";
import { PageType } from "../../helpers/PageType";
import { ImageType } from "../../helpers/ImageType";
import { ButtonType } from "../../helpers/ButtonType";

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

//?Prealoader
//?==============================================================================
export const StyledPreloader = styled(PageType)`
  /* display: flex; */
  ${({ primary }) =>
    primary &&
    css` */
      ${tw`flex justify-center items-start h-full`}
    `}
  .lds-ellipsis {
    ${tw`flex items-center relative h-10 w-20`}
    div {
      ${tw`absolute  h-4 w-4 rounded-full bg-blue3 shadow-cstblue1`}
      animation-timing-function: cubic-bezier(0, 1, 1, 0);
    }
    div:nth-child(1) {
      left: 12px;
      animation: lds-ellipsis1 0.6s infinite;
    }
    div:nth-child(2) {
      left: 12px;
      animation: lds-ellipsis2 0.6s infinite;
    }
    div:nth-child(3) {
      left: 36px;
      animation: lds-ellipsis2 0.6s infinite;
    }
    div:nth-child(4) {
      left: 60px;
      animation: lds-ellipsis3 0.6s infinite;
    }
    @keyframes lds-ellipsis1 {
      0% {
        transform: scale(0);
      }
      100% {
        transform: scale(1);
      }
    }
    @keyframes lds-ellipsis3 {
      0% {
        transform: scale(1);
      }
      100% {
        transform: scale(0);
      }
    }
    @keyframes lds-ellipsis2 {
      0% {
        transform: translate(0, 0);
      }
      100% {
        transform: translate(24px, 0);
      }
    }
  }
`;

//?Button
export const StyledButton = styled(ButtonType)`
  margin: 0 0 1rem 0;
  background: ${({ bgColor }) => (bgColor ? bgColor : colors.blue3)};
  border: ${({ border }) => (border ? border : "none")};
  color: ${({ colorText }) => (colorText ? colorText : colors.blue3)};
  border-radius: ${({ radius }) => (radius ? radius : "4px")};
  padding: ${({ padding }) => (padding ? padding : "5px 20px")};
  box-shadow: 0 0 10px ${colors.blue4};
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 20px ${colors.blue4};
    transform: scale(1.05);
    color: ${colors.blue3};
    border-color: ${colors.blue3};
  }
`;
export const Container = styled.div`
  ${tw`flex items-center justify-end bg-black1 p-2.5`}
`;
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
export const StyledNavlink = styled(NavLink)`
  ${tw`text-white  no-underline`}
`;

export const Subscription = styled.div`
  ${tw`flex flex-col justify-center items-center py-3 px-2 mr-7 sm: mr-0 px-5`}
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
export const Button = styled.div`
  ${tw`flex p-1 w-20 bg-transparent text-base border-2 border-solid border-blue4 rounded-3xl text-blue1 ease-in-out duration-300 outline-none justify-center shadow-cstblue`}

  &:hover {
    ${tw`bg-blue4 text-primary cursor-pointer shadow-cstblue1`}
  }
`;
export const Description = styled.div`
  ${tw`flex flex-col justify-center items-center pb-2 px-3 sm:ml-10 sm:px-5`}
`;
export const Username = styled.div`
  ${tw`py-3`}
  a {
    ${tw`no-underline text-blue4`}
    &:visited {
      ${tw`text-purple-400`}
    }
    &:hover {
      ${tw`text-blue3`}
    }
  }
`;
export const Status = styled.div`
  ${tw`text-dark3 h-5 text-sm`}
`;
export const UserLocation = styled.div`
  ${tw`py-1 text-gray1 text-sm`}
`;

// login
export const StyledSearch = styled(PageType)`
  /* ${tw`flex box-border transform -translate-x-2/4 -translate-y-2/4 shadow-cst1 rounded-xl bg-black1`} */
  ${tw`flex pr-2 items-center`}
  & {
    .user_box {
      ${tw`relative`}
      .line {
        height: 20px;
        background-color: red;
        box-shadow: 0 0 10px ${colors.blue4};
      }
      input {
        ${tw`w-full pt-1 text-base text-white border-none outline-none bg-transparent border-white rounded-none pl-1`}
        border-bottom: 1px solid;
      }
      label {
        ${tw`absolute top-0 left-0 text-base text-white pointer-events-none duration-500`}
      }
      /* input[type="search"]:valid ~ label, */
      input:focus ~ label {
        ${tw`-top-5 left-0 text-xs text-blue3 `}
      }
      input:focus {
        ${tw`outline-none shadow-none text-blue3 duration-300`}
        background-size: 100% 100%, 100% 100%;
      }
    }
  }
`;
