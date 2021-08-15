import styled, { css } from "styled-components";
import tw from "twin.macro";
import { NavLink } from "react-router-dom";
import { PageType } from "../../helpers/PageType";
import { ImageType } from "../../helpers/ImageType";
import { ButtonType } from "../../helpers/ButtonType";
import { FaSearch } from "react-icons/fa";
import { CgPlayListSearch } from "react-icons/cg";
import { VscSearch, VscSearchStop } from "react-icons/vsc";
import { RiUserSearchFill } from "react-icons/ri";

export const colors = {
  primary: "#fff",
  dark3: "#9CA3AF",
  blue1: "#4169E1",
  blue3: "#03e9f4",
  blue4: "#1b86f9",
  black1: "#151728",
  rgba: "rgba(0,0,0,.5)",
  gray: "#bbb"
  // theme: "#BE185D",
  // light: "#f6f7f9",
  // light1: "#F3F4F6",
  // light2: "#E5E7EB",
  // light3: "#f4f3f8",
  // dark1: "#1F2937",
  // dark2: "#4B5563",
  // dark4: "#2D3748",
  // red: "#DC2626",
  // blue2: "#ebe7fb",
  // blue500: "rgba(59, 130, 246, 1)",
};

//?Prealoader
//?==============================================================================
export const StyledPreloader = styled(PageType)`
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
    `
  }
  
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

export const StyledSearch = styled(PageType)`
  ${tw`flex items-center justify-start p-0 m-0`}
  input[type="search"] {
    ${tw`text-3xl w-0 h-12 font-thin border-none outline-none text-white bg-transparent cursor-pointer`}
    font-family: "Lato";
    transition: width 0.4s cubic-bezier(0, 0.795, 0, 1);
  }

  input[type="search"]:focus:hover {
    border-bottom: 1px solid ${colors.blue4};
  }
  ${({clicked}) => clicked && css`
    input[type="search"] {
      width: 24rem;
      border-bottom: 1px solid ${colors.gray};
      cursor: text;
      background-color: transparent;
    }
  `}
`;

//?Button
export const StyledButton = styled(ButtonType)`
  background: ${({ bgColor }) => (bgColor ? bgColor : colors.blue3)};
  border: ${({ border }) => (border ? border : "none")};
  color: ${({ colorText }) => (colorText ? colorText : colors.gray)};
  padding: ${({ padding }) => (padding ? padding : "5px 10px")};
  display: ${({clicked}) => clicked ? 'block' : 'none'};
  border-bottom: 1px solid ${colors.gray};
  font-family: "Lato";
  ${tw`m-0 w-16 h-12 text-3xl cursor-pointer font-thin`}
  &:hover {
    box-shadow: 1 1px 10px ${colors.blue4};
    border-color: ${colors.blue4};
  }
  
`;
export const Container = styled.div`
  ${tw`flex items-center justify-end bg-black1 p-2.5`}
`;

export const ButtonSearch = styled(PageType)`
  ${tw` bg-transparent border-0 shadow-none outline-none cursor-pointer px-3 m-0 rounded leading-9 transition ease-out  flex items-center justify-center`};
    color: ${colors.gray};
    
  &:hover {
    ${tw`transform scale-105`};
  }
`;
export const StyledIconSearch = styled(VscSearch)`
  ${tw`text-5xl`}
`;
export const StyledIconSearchClose = styled(VscSearchStop)`
  ${tw`text-5xl`}
`;
export const SearchUsers = styled(RiUserSearchFill)`
  ${tw`text-4xl`}
  &:hover{
    color: ${colors.blue4};
  }
`;


export const Select = styled(PageType)`
display: ${({clicked}) => clicked ? 'block' : 'none'};
  select{
    ${tw`text-base w-28 h-12 p-1 bg-transparent border-none font-thin cursor-pointer `}
    border-bottom: 1px solid ${colors.gray};
    font-family: "Lato";
    color: ${colors.gray};
    &:hover {
      border-bottom: 1px solid ${colors.blue4};
    }
    option {
      font-size: 1rem;
      background: transparent;
      
    }
  }
`