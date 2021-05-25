import styled, { keyframes } from "styled-components";
import tw from "twin.macro";
import { FaCog } from "react-icons/fa";

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

// export const StyledDialogContainer = styled.div`
//    min-height: 80vh;
//    display: flex;
//    flex-grow: 1;
//    box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.1);
//    padding: 20px 40px;
//    max-width: 93%;
//    border-radius: 10px;
//    border-right: 1px solid #ebe7fb;
// `;

export const StyledDialogContainer = styled.div.attrs({
   // className: "flex flex-grow min-h-screen max-w-full py-5 px-10 rounded-xl border-r-2 border-blue-100 shadow-xl"
})`
${tw`flex flex-grow min-h-screen max-w-full py-5 px-10 rounded-xl border-r-2  shadow-xl`}
   &{
      .dialogBody {
         ${tw`flex flex-grow rounded-xl border-blue-200 shadow-lg `}
      }
      .dialogContent {
         ${tw`flex flex-grow py-4 px-5 rounded-xl border-blue-200 shadow-lg 
         bg-gray-100 `}
      }
   }
`;

// export const StyledDialogBody = styled.div`
//    flex-grow: 1;
//    border-radius: 10px;
//    box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.1);
//    display: flex;
// `;

// export const StyledDialogContent = styled.div`
//    display: flex;
//    flex-grow: 1;
//    padding: 15px 20px;
//    border-radius: 10px;
//    background-color: ${colors.light};
//    box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.1);
// `;

// export const StyledChatContent = styled.div`
//    flex-grow: 1;
//    padding: 20px 40px;
//    max-width: 93%;
// `;

// export const StyledChatHeader = styled.div`
//    display: flex;
//    justify-content: space-between;
//    align-items: center;
//    padding-bottom: 15px;
//    border-bottom: 1px solid #ebe7fb;
// `;

// export const StyledCurrentChattingUser = styled.div`
//    display: flex;
//    align-items: center;
// `;

// export const CurrentChattingUser = styled.p`
//    margin: 0;
//    font-weight: 600;
// `;

export const StyledChatContent = styled.div`
${tw`flex-grow py-5 px-10 max-w-full`}
   & {
      .chatHeader {
         ${tw`flex justify-between items-center pb-4 border-b border-solid border-gray-100`}
      }
      .chatCurrentChattingUser {
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

// export const StyledButtonSetting = styled.button`
//    // color: black;
//    background-color: transparent;
//    cursor: pointer;
//    margin: 0;
//    border: none !important;
//    justify-content: center;
// `;

export const StyledIcon = styled(FaCog)`
   color: black;
   font-size: 20px;
`;

export const StyledContentBody = styled.div`
   ${props => props.vh &&  `max-height: calc(100vh - calc(100vh / 2))`};
   overflow: auto;

//    &{
//       .chatItem {
//          ${tw`justify-end items-end mb-4 transition-all transform scale-0 origin-right ease-in-out`}
//       }
//    }
`;

const showIn = keyframes`
   0% {
      transform: scale(0);
   }
   100% {
      transform: scale(1);
   }
`;

export const StyledChatItem = styled.div`
   // display: flex;
   // justify-content: flex-end;
   // align-items: flex-end;
   // margin-bottom: 15px;
   // transition: all 0.3s ease;
   // transform: scale(0);
   // transform-origin: right;
   // animation: ${showIn};
   // animation-duration: 0.2s;
   // animation-iteration-count: 1;
   // animation-direction: normal; 
   // animation-timing-function: cubic-bezier(
   // 0.88,
   // 0.19,
   // 0.37,
   // 1.11
   // ); 
   // animation-fill-mode: both;
   // animation-delay: 0.2s;

`;

export const StyledChatItemOther = styled(StyledChatItem)`
   animation-delay: ${props => props.delay}s;
   flex-direction: row-reverse;
   transform-origin: left;
   background-color: #fff;
   color: #000;
   border-radius: 10px 10px 10px 0;
   max-width: 50%;
   margin-right: 20px;
   margin-left: 0px;
   .chat__item__content .chat__meta span {
      color: #d1d1d1;
   }
   .chat__item__content {
      background-color: #fff;
      color: #000;
      border-radius: 10px 10px 10px 0;
      max-width: 50%;
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
