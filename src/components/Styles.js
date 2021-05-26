import styled, { keyframes } from "styled-components";
import tw from "twin.macro";
import { FaCog, FaPlus, FaPaperPlane} from "react-icons/fa";

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
   red: "#DC2626",
   blue1: "#4169E1",
   blue2: "#ebe7fb",
};


export const StyledDialogContainer = styled.div.attrs({
})`
${tw`flex flex-grow py-5 px-10 rounded-xl  shadow-xl`}
`;


export const StyledChatContent = styled.div`
${tw`flex-grow py-5 px-10 max-w-full bg-gray-100`}
   & {
      .chat__content__header {
         ${tw`pb-4 flex justify-between items-center`}
         border-bottom: 1px solid ${colors.blue2};
      }
      .current__chatting__user {
         ${tw`flex items-center`}
         

      }
      p {
         ${tw`font-semibold m-0`}
      }
      button {
         ${tw`bg-transparent m-0 justify-center border-0 cursor-pointer`}
      }
   }
`;


export const StyledIconSetting = styled(FaCog)`
   ${tw`text-base text-black`};
`;
export const StyledIconPlus = styled(FaPlus)`
   ${tw`text-base `}
`;
export const StyledIconPaperPlane = styled(FaPaperPlane)`
   ${tw`text-base `}
`;

export const StyledContentBody = styled.div`
   ${props => props.vh &&  `max-height: calc(100vh - calc(100vh / 2))`};
   overflow: auto;

   &{
      .chat__item {
         ${tw`flex justify-end items-end mb-4 origin-right `}
      }
   }
`;

export const StyledContentItems = styled.div`
   &{
      .chat__item .avatar {
         ${tw`mr-0 ml-5 bg-white p-px`}
      }
      .chat__item__content {
         ${tw`bg-blue-400 text-white p-4 rounded-xl`}
         max-width: 50%;
         min-width: 215px;
      }
      .chat__item__content .chat__meta {
         ${tw`flex justify-between mt-2.5`}
      }
      .chat__item__content .chat__meta span {
         ${tw`text-sm text-blue-100 select-none`}
      }
      .chat__msg {
         ${tw`select-none`}
      }
      .chat__item.other {
         ${tw`flex-row-reverse origin-left`}
      }
      .chat__item.other .chat__item__content {
         ${tw`bg-white text-black rounded-xl`}
         max-width: 50%;
      }
      .chat__item.other .avatar {
         ${tw`mr-5 ml-0`}
      }
      .chat__item.other .chat__item__content .chat__meta span {
         ${tw`text-gray-200`}
      }
   }
`;

export const StyledContentFooter = styled.div`
   ${tw`pt-7`}
   &{
      .sendNewMessage {
         ${tw`flex justify-between p-2.5 bg-white rounded-lg`}
      }
      .sendNewMessage button {
         ${tw`w-9 h-8 bg-gray-200 border-0 shadow-none outline-none cursor-pointer text-base text-blue-300 p-0 rounded leading-9 transition ease-out`}
         &:hover {
            ${tw`transform scale-125`}
         }
      }
      .sendNewMessage input {
         ${tw`flex-grow py-0 px-3.5 bg-transparent border-0 outline-none`}
      }
      #sendMsgBtn {
         ${tw`bg-blue-400 text-white`}
      }
   }
`;

export const StyledLogin = styled.main.attrs({
   
 })`
 ${tw`flex flex-grow flex-col px-10 justify-center items-center bg-gray-100`}
   & {
     form {
       ${tw`bg-white text-center rounded py-8 px-16 justify-center shadow  max-w-xs`}
     }
     input {
       ${tw`border-gray-300 mb-2 border-solid border rounded py-2 px-4`}
     }
     input[type="checkbox"] {
       ${tw`border-gray-300 mb-2 w-3 border-solid border rounded py-2 px-4 space-x-5`}
     }
     button {
       ${tw`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-blue-700 rounded`}
     }
     .btn {
      @apply py-2 px-4 font-semibold rounded-lg shadow-md;
    }
    .btn-green {
      @apply text-white bg-green-500 hover:bg-green-700;
    }
   }
 `

export const StyledInputContainer = styled.div`
   margin-top: 20px;
   display: flex;
`;

export const StyledTextArea = styled.textarea`
   resize: none;
   min-height: 35px;
   background-color: ${colors.primary};
   margin: 10px 0 ;
   max-width: 1000px;
`;


export const StyledPostButton = styled.button`
   padding: 5px;
   width: 90px;
   background-color: transparent;
   font-size: 16px;
   border: 2px solid ${colors.blue1};
   border-radius: 25px;
   color: ${colors.blue1};
   transition: ease-in-out 0.3s;
   outline: 0;

   &:hover {
      background-color: ${colors.blue1};
      color: ${colors.primary};
      cursor: pointer;
   }
`;
