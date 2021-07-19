import { ImageType } from './../../helpers/ImageType';
import { PageType } from '../../helpers/PageType';
import styled, {css} from "styled-components";
import tw from "twin.macro";
import avatar from '../../../assets/img/avatar.png'
import { ButtonType } from '../../helpers/ButtonType';


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
   ${({center}) => center && css`
      ${tw`flex justify-center items-center h-full`}
   `}
   .lds-ellipsis{
      ${tw`inline-block relative h-20 w-20`}
      div {
         ${tw`absolute top-12 h-4 w-4 rounded-full bg-blue3 shadow-cstblue1`}
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

export const CheckBox = styled(PageType)`
   input[type=checkbox]{
      ${tw`relative top-0 mr-4 border-dark4 cursor-pointer`}

      &:before {
         ${tw`absolute left-0 z-10 w-4 h-4 border-2 border-solid border-dark2 transition-all duration-500 ease-in-out`}
         content: "";
      }
      &:checked {
         &:before {
            ${tw`transform -rotate-45 h-2 border-blue3 `}
            border-top-style: none; 
            border-right-style: none;
            border-color: ${props => props.color}
         }
         &::after{
            ${tw`shadow-cst2 `}
            box-shadow: ${props => props.shadow};
            background: ${props => props.bg}
         }
      }

      &:after {
         ${tw`absolute bg-white top-0 left-0 w-4 h-4  cursor-pointer`}
         content: "";
      }
   }
   label {
      ${tw`py-1 text-xs`}
   }
`;


//? ProfileInfo
//*===========================================================================
export const ProfileContent = styled.div`
   ${tw`flex p-3.5 flex-row flex-wrap shadow-cst`}
`;
export const ProfileDescription = styled.div`
   ${tw`my-0 mx-auto leading-5 w-3/5`}
`;
export const StyledProfileData = styled.div`
   ${tw`italic text-blue-300`}
   &{
      h1{
         ${tw`text-4xl text-light`}
      }
      div{
         ${tw`font-medium text-gray2`}
      }
      p{
         span{
            ${tw`italic text-blue-200`}
         }
      }
      b{
         ${tw`text-blue-300`}
      }
   }
`;
export const StyledContacts = styled.div`
   ${tw`font-medium italic text-sm`}
   &{
      b{
         ${tw`font-semibold text-gray3 `}
      }
      span{
         ${tw`font-medium text-blue-300`}
      }
   }
`;
export const Jumbotron = styled.div`
   ${tw`h-48 bg-center bg-cover rounded`};
   background-image: url('https://www.freegreatpicture.com/files/199/1774-three-wide-screen-vlad.jpg');
`;


//? AvatarProfile
//*===========================================================================
export const AvatarContent = styled.div`
   ${tw`relative max-w-205 my-12 mx-auto`}
`;
export const AvatarPreview = styled.div`
   ${tw`w-52 h-52 relative rounded-full border-4 border-solid border-dark4 shadow-cst`}
`;
export const AvatarImg = styled(ImageType).attrs((props) => ({
   src: props.profile.photos.large || avatar,
}))`
   ${tw`max-w-full h-auto rounded-full bg-transparent`}
`;

export const AvatarEdit = styled.div`
   ${tw`absolute right-7 z-10 -top-0`}
   & {
      input {
         ${tw`hidden`}
      }
      input + label {
         ${tw`w-9 h-9 mb-0 rounded-full bg-white border border-solid border-transparent shadow-cst cursor-pointer font-normal transition-all ease-in-out duration-200`}

         &:hover {
            ${tw`bg-gray-200 border-gray-500`}
         }
         &:after {
            content: "\f040";
            font-family: "FontAwesome";
            ${tw`text-dark4 absolute bottom-1.5 left-3 text-center m-auto`}
         }
      }
   }
`;


//?ProfileStatus
//*===========================================================================
export const StyledProfileStatus = styled.div`
   ${tw` py-2.5 text-center text-dark3 shadow-xl`}
   &:hover {
      ${tw`text-dark4`}
   }
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