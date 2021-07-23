import styled, {css} from "styled-components";
import tw from "twin.macro";
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


//?LoginPage
//?===========================================================================
export const StyledLogin = styled(PageType)`
   ${tw`absolute top-2/4 left-2/4 w-96 p-10 box-border transform -translate-x-2/4 -translate-y-2/4 shadow-cst1 rounded-xl bg-black1`}
   &{
      .user_box {
         ${tw`relative pb-5`}

         input {
            ${tw`w-full pt-1 text-base text-white border-none outline-none bg-transparent border-white rounded-none pl-1`}
            border-bottom: 1px solid;
         }
         label {
            ${tw`absolute top-0 left-0 text-base text-white pointer-events-none duration-500`}
         }
         input[type="text"]:valid ~ label,
         input[type="password"]:valid ~ label,
         input:focus ~ label {
            ${tw`-top-5 left-0 text-xs text-blue3 `}
         }
         input:focus {
            ${tw`outline-none shadow-none text-blue3 duration-300`}
            background-size: 100% 100%, 100% 100%;
         }
      }
      button {
         ${tw`relative inline-block py-2.5 px-5 mt-5  text-blue3 text-base border-none no-underline bg-black1 uppercase overflow-hidden duration-500 tracking-widest cursor-pointer`}
         border-bottom: 1px solid transparent;
         
         span {
         ${tw`absolute block`}
         }
         span:nth-child(1) {
            ${tw`top-0 -left-full w-full h-0.5 `}
            background: linear-gradient(90deg, transparent, ${colors.blue3});
            animation: btn-anim1 1s linear infinite;
         }
         @keyframes btn-anim1 {
            0% {
            left: -100%;
            }
            50%,100% {
            left: 100%;
            }
         }
         span:nth-child(2) {
            ${tw`-top-full right-0 w-0.5 h-full`}
            background: linear-gradient(180deg, transparent, ${colors.blue3});
            animation: btn-anim2 1s linear infinite;
            animation-delay: .25s
         }
         @keyframes btn-anim2 {
            0% {
            top: -100%;
            }
            50%,100% {
            top: 100%;
            }
         }
         span:nth-child(3) {
            ${tw`bottom-0 -right-full w-full h-0.5`}
            background: linear-gradient(270deg, transparent, ${colors.blue3});
            animation: btn-anim3 1s linear infinite;
            animation-delay: .5s
         }
         @keyframes btn-anim3 {
            0% {
            right: -100%;
            }
            50%,100% {
            right: 100%;
            }
         }
         span:nth-child(4) {
            ${tw`-bottom-full left-0 w-0.5 h-full`}
            background: linear-gradient(360deg, transparent, ${colors.blue3});
            animation: btn-anim4 1s linear infinite;
            animation-delay: .75s
         }
         @keyframes btn-anim4 {
            0% {
            bottom: -100%;
            }
            50%,100% {
            bottom: 100%;
            }
         }
         &:hover {
         ${tw`bg-blue3 text-white rounded shadow-cst2`}
         }
      }
   }
`;


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

//?Formik
//?===========================================================================

export const ButtonGroup = styled.div`
   ${tw`flex justify-around flex-row `}
`;