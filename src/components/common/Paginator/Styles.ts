import styled from "styled-components";
import tw from "twin.macro";
import { SpanType } from "../../helpers/ButtonType";

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

//?UserPage
//?===========================================================================
export const StyledPageNumber = styled(SpanType)`
  ${tw`flex justify-center items-center text-blue-500 cursor-pointer text-base rounded-full h-12 w-12 m-1 shadow-cst transition ease-out bg-white`}
  &:active {
    ${tw`bg-dark1 text-green-800`}
  }
  &:hover {
    ${tw`bg-blue4 text-white transform scale-125 shadow-cstblue`}
  }
  ${({ active }) =>
    active &&
    `
      border-color: black;
      font-weight: 700;
      background: var(--blue500);
      box-shadow: 0 0 10px var(--blue4);
      color: var(--light1)
   `}
`;
