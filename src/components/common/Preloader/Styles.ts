import styled, {css} from "styled-components";
import tw from "twin.macro";
import { PageType } from "../../helpers/PageType";

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
   ${({primary}) => primary && css`
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