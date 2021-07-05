import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
   position: fixed;
   z-index: 99;
   .active {
      border-right: 4px solid var(--white);

      img {
         filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
            brightness(105%) contrast(102%);
      }
   }
`;

export const Button = styled.button`
   background-color: var(--black);
   border: none;
   width: 2.5rem;
   height: 2.5rem;
   border-radius: 50%;
   margin: 0.5rem 0 0 0.5rem;
   cursor: pointer;

   display: flex;
   justify-content: center;
   align-items: center;

   position: relative;

   &::before,
   &::after {
      content: "";
      background-color: var(--white);
      height: 2px;
      width: 1rem;
      position: absolute;
      transition: all 0.3s ease;
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

export const SidebarContainer = styled.div`
   background-color: var(--black);
   width: 3.5rem;
   height: 80vh;
   margin-top: 1rem;
   border-radius: 0 30px 30px 0;
   padding: 1rem 0;

   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-between;

   position: relative;
`;

export const Logo = styled.div`
   width: 2rem;

   img {
      width: 100%;
      height: auto;
   }
`;

export const SlickBar = styled.ul`
   color: var(--white);
   list-style: none;
   display: flex;
   flex-direction: column;
   align-items: center;
   background-color: var(--black);

   padding: 2rem 0;

   position: absolute;
   top: 6rem;
   left: 0;

   width: ${(props) => (props.clicked ? "12rem" : "3.5rem")};
   transition: all 0.5s ease;
   border-radius: 0 30px 30px 0;
`;

export const Item = styled(NavLink)`
   text-decoration: none;
   color: var(--white);
   width: 100%;
   padding: 1rem 0;
   cursor: pointer;

   display: flex;
   padding-left: 1rem;

   &:hover {
      border-right: 4px solid var(--white);

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
   width: ${(props) => (props.clicked ? "14rem" : "3rem")};
   height: 3rem;

   padding: 0.5rem 1rem;
   /* border: 2px solid var(--white); */
   border-radius: 20px;

   display: flex;
   align-items: center;
   justify-content: center;
   margin-left: ${(props) => (props.clicked ? "10rem" : "0")};

   background-color: var(--black);
   color: var(--white);

   transition: all 0.3s ease;

   img {
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;
      cursor: pointer;

      &:hover {
         border: 2px solid var(--grey);
         padding: 2px;
      }
   }
`;

export const Details = styled.div`
   opacity: ${(props) => (props.isAuth ? "1" : "0")};
   display: ${(props) => (props.clicked ? "flex" : "none")};
   justify-content: space-between;
   align-items: center;
`;

export const Name = styled.div`
   padding: 0 1.5rem;

   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;

   h4 {
      display: inline-block;
   }

   #view {
      font-size: 0.8rem;
      text-decoration: none;
      color: var(--gray);
      border: none;

      &:hover {
         text-decoration: underline;
      }
   }
`;

export const Logout = styled.button`
   border: none;
   width: 2rem;
   height: 2rem;
   margin: 0 auto;
   background-color: transparent;
   display: flex;
   justify-content: center;
   align-items: center;

   #logOut {
      /* width: 100%; */
      /* height: auto; */
      /* filter: invert(14%) sepia(57%) saturate(7485%) hue-rotate(357deg) brightness(104%) contrast(118%); */
      transition: all 0.3s ease;

      &:hover {
         border: none;
         padding: 0;
         opacity: 0.5;
         color: black;
      }
   }
`;

export const Pages = styled.div`
   width: 100vw;
   height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;

   h1 {
      font-size: calc(2rem + 2vw);
      background: linear-gradient(to right, #803bec 30%, #1b1b1b 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
   }
`;
