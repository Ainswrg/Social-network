import styled, { keyframes } from "styled-components";
import tw from "twin.macro";
import { FaCog, FaPlus, FaPaperPlane } from "react-icons/fa";

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

export const StyledDialogContainer = styled.div.attrs({})`
   ${tw`flex flex-grow py-5 px-10 rounded-xl  shadow-xl`}
`;

export const StyledChatContent = styled.div`
   ${tw`flex-grow py-5 px-10 max-w-full bg-gray-100`}
   & {
      .content-header {
         ${tw`flex pb-4 justify-between items-center border-b border-t-0 border-l-0 border-r-0 border-solid border-gray-300`}
      }
      .chatting-user {
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
   ${(props) => props.vh && `max-height: calc(100vh - calc(100vh / 2))`};
   overflow: auto;

   & {
      .chat__item {
         ${tw`flex justify-end items-end mb-4 origin-right `}
      }
   }
`;

export const StyledContentItems = styled.div`
   & {
      .chat__item .avatar {
         ${tw`mr-0 ml-5 bg-white p-px`}
      }
      .chat__item__content {
         ${tw`bg-blue-400 text-white p-4 rounded-xl max-w-1/2 min-w-cst`}
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
         ${tw`bg-white text-black rounded-xl max-w-1/2`}
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
   & {
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

export const StyledLogin = styled.div.attrs({})`
   ${tw`flex flex-grow flex-col px-10 justify-center items-center bg-gray-100`}
   & {
      form {
         ${tw`bg-white text-center rounded py-8 px-16 justify-center shadow  max-w-full`}
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
      .errorStatus {
         ${tw`text-red-500 font-light`}
      }
   }
`;

export const ButtonGroup = styled.div`
   ${tw`flex justify-around flex-row mt-6`}
`;

export const StyledInputContainer = styled.div`
   ${tw`flex mt-5`}
`;

export const StyledTextArea = styled.textarea`
   ${tw`my-2.5 max-w-1000 bg-primary min-h-cst resize-none`}
`;

export const StyledPostButton = styled.button`
   ${tw`p-1 w-24 bg-transparent text-base border-2 border-solid border-blue1 rounded-3xl text-blue1 ease-in-out duration-300 outline-none`}

   &:hover {
      ${tw`bg-blue1 text-primary cursor-pointer`}
   }
`;

export const StyledPaginator = styled.div.attrs({})`
   ${tw`flex m-2.5 justify-center items-center`}
   & {
      button {
         ${tw`bg-transparent hover:text-dark2 text-white py-1 px-3 border-none rounded cursor-pointer  text-4xl text-blue-300 leading-9 transition ease-out`}
         &:hover {
            ${tw`transform scale-105`}
         }
      }
   }
`;

export const StyledPageNumber = styled.div`
   & {
      .pageNumber {
         ${tw`flex justify-center items-center text-blue-500 cursor-pointer text-base rounded-full h-12 w-12 m-1 shadow-cst transition ease-out`}
         &:active {
            ${tw`bg-blue-600`}
         }
         &:hover {
            ${tw`bg-blue-500 text-white transform scale-125`}
         }
      }
      .pageNumber.selectedPage {
         ${tw`font-bold border-black bg-blue-500 text-white`}
      }
   }
`;




export const StyledUser = styled.div`
   ${tw`shadow-cst m-5 grid grid-cols-6 rounded`}
`;
export const Subscription = styled.div`
   ${tw`col-span-1 flex flex-col justify-center items-center p-3`}
`;
export const Avatar = styled.img`
   ${tw`rounded-full w-20 border border-solid border-gray1 transition ease-out`}
   &:hover {
      ${tw`transform scale-105 border-2 border-blue1`}
`;
export const Button = styled.div`
   ${tw`flex p-1 w-16 bg-transparent text-base border-2 border-solid border-blue1 rounded-3xl text-blue1 ease-in-out duration-300 outline-none justify-center`}

   &:hover {
      ${tw`bg-blue1 text-primary cursor-pointer`}
   }
`;
export const Description = styled.div`
   ${tw`col-span-5 col-start-2 justify-between`}
`;
export const Username = styled.div`
   ${tw`py-3`}
   a{
      ${tw`no-underline text-blue1`}
      &:visited {
         ${tw`text-purple-400`}
      }
      &:hover {
         ${tw`text-blue-300`}
      }
   }
`;
export const Status = styled.div`
   ${tw`text-dark3 h-5 text-sm`}
`;
export const UserLocation = styled.div`
   ${tw`py-1 text-gray1 text-sm`}
`;