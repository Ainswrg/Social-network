import styled, {css} from "styled-components";
import tw from "twin.macro";
import { FaCog, FaPlus, FaPaperPlane } from "react-icons/fa";
import { NavLink } from "react-router-dom";

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


//?Icons
//*===========================================================================
export const StyledIconSetting = styled(FaCog)`
   ${tw`text-base text-black`};
`;
export const SettingButton = styled.button`
   ${tw`bg-transparent m-0 justify-center border-0 cursor-pointer`}
`;
export const StyledIconPlus = styled(FaPlus)`
   ${tw`text-base `}
`;
export const StyledIconPaperPlane = styled(FaPaperPlane)`
   ${tw`text-base `}
`;

//?WrapperAPP
//?===========================================================================
export const StyledWrapper = styled.div`
   display: ${(props) => (props.flex || "block")};
   & {
      ${tw`flex-grow py-5 px-10 rounded-xl  shadow-cst `}
   }
`;


//?Prealoader
//?==============================================================================
export const StyledPreloader = styled.div`
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
export const StyledContainer = styled.div`
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



//?LoginPage
//?===========================================================================
export const StyledLogin = styled.div`
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
         ${tw`relative inline-block py-2.5 px-5 mt-10  text-blue3 text-base border-none no-underline bg-black1 uppercase overflow-hidden duration-500 tracking-widest cursor-pointer`}
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

export const CheckBox = styled.div`
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
export const StyledError = styled.div`
   ${tw`text-xs text-red-400 mt-0`}
`;

export const ButtonGroup = styled.div`
   ${tw`flex justify-around flex-row mt-1`}
`;



//! ProfilePage
//?===========================================================================
export const TextArea = styled.div`
   &{
      textarea {
         font-size: 1rem;
         resize: vertical;
         border: 2px solid var(--gray-200);
         width: 400px;

         &:focus {
            outline: none;
            border: 2px solid var(--focus-ring-color);
         }
         &:invalid {
            border: 2px solid #ff7d87;
            box-shadow: none;
         }
      }
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
export const AvatarImg = styled.img.attrs((props) => ({
   src: props.profile.photos.large || props.avatar,
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
export const ProfileStatus = styled.div`
   ${tw` py-2.5 text-center text-dark3 shadow-xl`}
   &:hover {
      ${tw`text-dark4`}
   }
`;

//? Posts
export const AvatarPost = styled.div`
   ${tw`w-14 h-14 flex justify-center`}
   &{
      img{
         ${tw`rounded w-14 h-auto`}
      }
   }
`;
export const MessagePost = styled.div`
   ${tw`flex-grow  text-lg sm:pl-4`}
`;
export const LikePost = styled.div`
   ${tw`w-20 flex text-sm items-end self-end font-medium`}
`;


//?Paginator
//*============================================================================
export const StyledPaginator = styled.div`
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

//?Button 
//*===========================================================================
export const StyledButton = styled.button`
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


//!DialogPage
//?===========================================================================

export const StyledChatContainer = styled.div`
   ${tw`flex-grow py-5 px-10 max-w-full min-w-cst bg-gray-100`}
   & {
      p {
         ${tw`font-semibold m-0`}
      }
   }
`;

export const ChatHeader = styled.div`
   ${tw`flex pb-4 justify-between items-center border-b border-t-0 border-l-0 border-r-0 border-solid border-gray-300`}
`;

export const ChattingUser = styled.div`
   ${tw`flex items-center`};
`;

export const ChatBody = styled.div`
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
         ${tw`bg-blue-500 text-white p-4 rounded-xl max-w-1/2 min-w-cst`}
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

export const ChatFooter = styled.div`
   ${tw`pt-5 flex flex-col justify-around`}
`;
export const ChatFormContainer = styled.div`
   ${tw`flex w-full p-2.5`}
`;
export const StyledField = styled.div`
   ${tw`flex w-full self-center`}
   & {
      textarea {
         ${tw`text-gray-500 w-full py-0 px-2.5 border-0 outline-none`}
      }
   }
`;

export const ChatButton = styled.button`
   
   ${tw`w-9 h-8 bg-gray-200 border-0 shadow-none outline-none cursor-pointer text-base text-blue-500 p-0 rounded leading-9 transition ease-out m-2 items-center`};

   ${props => props.primary && css`
      ${tw`bg-blue-500 text-white`}
   `};
   &:hover {
      ${tw`transform scale-125`};
   };
`;
export const StyledFlex = styled.div`
   /* ${tw`flex flex-col self-start w-full m-0`} */

`;



//?UserPage
//?===========================================================================
export const StyledPageNumber = styled.div`
   ${tw`flex justify-center items-center text-blue-500 cursor-pointer text-base rounded-full h-12 w-12 m-1 shadow-cst transition ease-out bg-white`}
   &:active {
      ${tw`bg-blue-600`}
   }
   &:hover {
      ${tw`bg-blue4 text-white transform scale-125 shadow-cstblue`}
   }
   ${(props) =>
      props.currentPage === props.p &&
      `
         border-color: black;
         font-weight: 700;
         background: ${colors.blue500};
         box-shadow: 0 0 10px ${colors.blue4};
         color: ${colors.light1};
      `}
`;

export const Subscription = styled.div`
   ${tw`flex flex-col justify-center items-center py-3 px-2 mr-7 sm: mr-0 px-5`}
`;
export const Avatar = styled.img`
   ${tw`rounded-full border border-solid border-gray1 transition ease-out cursor-pointer`};
   width: ${({width}) => width ? width : '5rem'};
   margin: ${({margin}) => margin && margin};
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


//? sideBar
//?===========================================================================
export const Container = styled.div`
   ${tw`fixed z-50`}
   .active {
      border-right: 4px solid ${colors.primary};

      img {
         filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
            brightness(105%) contrast(102%);
      }
   }
`;

export const MenuButton = styled.button`
   ${tw`bg-black1 border-none w-10 h-10 rounded-full mt-2 ml-2 cursor-pointer flex justify-center items-center relative`}

   &::before,
   &::after {
      content: "";
      transition: all 0.3s ease;
      ${tw`absolute bg-white w-4 h-0.5`}
   }

   &::before {
      top: ${(props) => (props.clicked ? "1.5" : "1rem")};
      transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
   }

   &::after {
      top: ${(props) => (props.clicked ? "1.2" : "1.5rem")};
      transform: ${(props) =>
         props.clicked ? "rotate(-135deg)" : "rotate(0)"};
   }
`;

export const Logo = styled.div`
   width: 2rem;

   img {
      width: 100%;
      height: auto;
   }
`;

export const SlickBar = styled.ul`
   ${tw`text-white bg-black1 list-none flex flex-col items-center absolute top-24 left-0 py-8`}

   width: ${(props) => (props.clicked ? "12rem" : "3.5rem")};
   transition: all 0.5s ease;
   border-radius: 0 30px 30px 0;
`;

export const Item = styled(NavLink)`
   ${tw`no-underline text-white w-full py-4 cursor-pointer flex pl-4`}

   &:hover {
      border-right: 4px solid ${colors.primary};

      img {
         filter: invert(100%) sepia(25%) saturate(1%) hue-rotate(40deg)
            brightness(105%) contrast(102%);
      }
   }

   img {
      width: 1.2rem;
      height: auto;
      filter: invert(75%) sepia(10%) saturate(366%) hue-rotate(162deg)
         brightness(96%) contrast(83%);
   }
`;

export const Text = styled.span`
   width: ${(props) => (props.clicked ? "100%" : "0")};
   overflow: hidden;
   margin-left: ${(props) => (props.clicked ? "1.5rem" : "0")};
   transition: all 0.3s ease;
`;

export const Profile = styled.div`
   ${tw`h-12 py-2 px-4 rounded-2xl flex items-center justify-center bg-black1 text-white`}

   width: ${(props) => (props.clicked ? "14rem" : "3rem")};
   margin-left: ${(props) => (props.clicked ? "10rem" : "0")};
   transition: all 0.3s ease;

   
`;

export const Details = styled.div`
   opacity: ${(props) => (props.isAuth ? "1" : "0")};
   display: ${(props) => (props.clicked ? "flex" : "none")};
   justify-content: space-between;
   align-items: center;
`;

export const Name = styled.div`
   ${tw`px-6 flex flex-col justify-center items-center`}

   h4 {
      display: inline-block;
   }

   #view {
      ${tw`text-sm no-underline text-gray2 border-none hover:underline`}
   }
`;

export const Logout = styled.button`
   ${tw`border-none w-8 h-8  bg-transparent flex justify-center items-center`}

   #logOut {
      transition: all 0.3s ease;

      &:hover {
         ${tw`border-none p-0 opacity-50 text-black`}
      }
   }
`;

export const Pages = styled.div`
   ${tw`w-screen h-screen flex justify-center items-center`}

   h1 {
      font-size: calc(2rem + 2vw);
      background: linear-gradient(to right, #803bec 30%, #1b1b1b 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
   }
`;