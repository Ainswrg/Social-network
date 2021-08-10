import styled, {css} from "styled-components";
import tw from "twin.macro";
import { NavLink } from "react-router-dom";
import { ButtonType } from "../helpers/ButtonType";
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
   background: ${({ bg}) => bg && bg };
   height: ${({height}) => height && height };
   width: ${({width}) => width && width};
   margin: ${({margin}) => margin ? margin : "0"};
   padding: ${({padding}) => padding ? padding : "0"};
   display: ${({display}) => display && display};
   flex-direction: ${({direction}) => direction && direction};
   max-width: ${({maxW}) => maxW && maxW};
   min-width: ${({mixW}) => mixW && mixW};
   flex-grow: ${({grow}) => grow && grow};
   justify-content: ${({justify}) => justify && justify};
   align-items: ${({items}) => items && items};
   position: ${({position}) => position && position};
   border-radius: ${({rounded}) => rounded && rounded};
   box-shadow: ${({shadow}) => shadow && shadow};
   z-index: ${({z}) => z && z};
   ${props => props.primary && css`
      ${tw`sm:flex-row md:justify-around lg:justify-start`}
   `}
   ${props => props.active && css`
      ${tw`sm:flex-row md:justify-around lg:justify-start`}
   `}
`
export const StyledNavlink = styled(NavLink)`
   ${tw`text-white  no-underline`}
`;


//?Button 
//*===========================================================================
export const StyledButton = styled(ButtonType)`
   background: ${({bgColor}) => bgColor ? bgColor : colors.blue3};
   border: ${({border}) => border ? border : 'none'};
   color: ${({colorText}) => colorText ? colorText : colors.primary};
   border-radius: ${({radius}) => radius ? radius : "4px"};
   padding: ${({padding}) => padding ? padding : "5px 20px"};
   box-shadow: 0 0 10px ${colors.blue4};
   cursor: pointer;
   &:hover {
      box-shadow: 0 0 20px ${colors.blue4};
      transform: scale(1.05);
   }
`;