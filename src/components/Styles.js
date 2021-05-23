import styled from "styled-components";

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
   blue1: "#4169E1"
};

export const StyledDialogContainer = styled.div`
   max-width: 90%;
   margin: auto;
   // background-color: #3b5bfe;
   min-height: 80vh;
   width: 100%;
   border-radius: 10px;
   padding: 20px;
   display: flex;
   padding-left: 0;
`;

export const StyledDialogBody = styled.div`
   flex-grow: 1;
   background-color: #f4f3f8;
   padding: 15px 20px;
   display: flex;
`;

export const StyledDialogContent = styled.div`
   display: flex;
   flex-grow: 2;
   padding: 15px 20px;
   background-color: ${colors.light3};
   box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.1);
`;

export const StyledInputContainer = styled.div`
   margin-top: 20px;
   display: grid;
`;

export const StyledTextArea = styled.textarea`
   resize: none;
   min-height: 35px;
   background-color: ${colors.primary};
   margin: 10px 0 ;
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
