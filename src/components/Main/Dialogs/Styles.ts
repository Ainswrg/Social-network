import { FaPaperPlane, FaRegPaperPlane } from "react-icons/fa";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { ButtonType, SpanType } from "../../helpers/ButtonType";
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


//?===========================================================================

export const StyledWrapper = styled(PageType)`
  display: ${(props) => props.flex || "block"};
  & {
    ${tw`flex-grow h-full py-5 px-10 rounded-xl  shadow-cst `}
  }
`;

export const ChatWrapper = styled.div`
  display: flex;
  height: 500px;
  border: 1px solid rgba(159, 183, 197, 0.2);
  border-radius: 8px;
  background-color: #e5e7eb;
`;

export const ChatFormContainer = styled.div`
  ${tw`flex w-full p-2.5`}
`;

export const StyledField = styled.div`
  ${tw`flex w-full self-center mt-4`}
  & {
    textarea {
      ${tw`text-gray-500 w-full py-0 px-2.5 border-0 outline-none`}
    }
  }
`;

export const ChatUsers = styled.div`
  border-right: 1px solid rgba(159, 183, 197, 0.1);
  padding: 20px;
  width: 200px;
  background-color: #f6f9fa;
`;

export const ChatMessages = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  padding: 30px;
`;
export const ChatButton = styled(ButtonType)`
  ${tw`w-9 h-8 bg-gray-200 border-0 shadow-none outline-none cursor-pointer text-base text-blue-500 p-0 rounded leading-9 transition ease-out m-2 items-center`};

  ${(props) =>
    props.primary &&
    css`
      ${tw`bg-blue-500 text-white`}
    `};
  &:hover {
    ${tw`transform scale-125`};
  }
`;

export const ChatBody = styled(PageType)`
  ${(props) => props.vh && `max-height: calc(100vh - calc(100vh / 2))`};
  overflow: auto;
`;

export const StyledIconPaperPlane = styled(FaPaperPlane)`
  ${tw`text-base `}
`;

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

export const ChatContainer = styled(PageType)`
  flex-direction:${({ user }) => user == 'other' && `row-reverse`};
  display: flex;
  word-wrap: ${({ user }) => (user == 'other' ? `break-word` : `break-word`)};
  justify-content: flex-end;

`;

export const ChatContent = styled(PageType)`
  background: ${({user}) => user == 'other' ? colors.blue500 : colors.primary};
  color: ${({user}) => user == 'other' ? colors.primary : colors.black1};
  padding: 1rem;
  border-radius: 0.75rem;
  width: 10rem;
  word-wrap: break-word;
  @media (min-width: 640px) {
    max-width: 100%;
    width: 20rem;
  }
  @media (min-width: 768px) {
    max-width: 50%;
    width: max-content;
  }
`;

export const ChatMessage = styled.div`
  ${tw`select-none`}
`;

export const ChatMeta = styled.div`
  ${tw`flex justify-between mt-2.5`}
`;

export const ChatSpan = styled(SpanType)`
  font-size: 0.75rem;
  user-select: none;
  color: ${({user}) => user == 'other' ? `rgba(37, 99, 235, 0.5);` : `rgba(107, 114, 128, 0.5);`}
`;

