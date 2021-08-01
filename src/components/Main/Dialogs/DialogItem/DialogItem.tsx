import React from "react";
import { Image, StyledContainer, StyleNav, StyleNavLink } from "../Styles";

interface PropsType {
  name: string;
  id: number;
}

const DialogItem: React.FC<PropsType> = ({ name, id }) => {
  let path = "/dialogs/" + id;

  return (
    <StyledContainer
      display='flex'
      border='0.5px solid rgba(10, 7, 7, 0.2)'
      items='center'
    >
      <Image>
        <img
          src='https://cdn3.iconfinder.com/data/icons/network-communication-vol-3-1/48/111-512.png'
          alt='logo'
        />
      </Image>
      <StyleNavLink>
        <StyleNav to={path} activeClassName={"active"}>
          {name}
        </StyleNav>
      </StyleNavLink>
    </StyledContainer>
  );
};

export default DialogItem;
