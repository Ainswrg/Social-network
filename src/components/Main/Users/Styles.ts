import styled, { css } from "styled-components";
import tw from "twin.macro";
import { NavLink } from "react-router-dom";
import { PageType } from "../../helpers/PageType";
import { ImageType } from "../../helpers/ImageType";

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

// //? Header
// //?===========================================================================
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
