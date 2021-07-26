import baseStyled, {  ThemedStyledInterface } from "styled-components";

export const theme = {
   colors: {
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
   },
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;