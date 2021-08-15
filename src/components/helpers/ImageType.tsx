import React from "react";
import { ProfileType } from "../../types/Types";

interface Props {
  width?: string;
  margin?: string | null;
  className?: string;
  Avatar?: string;
  profile?: ProfileType | null;
  src?: string | undefined;
  alt: string | undefined;
  onClick?: any;
  avatar?: string;
  id?: string
}

export const ImageType: React.FC<Props> = ({ className, src, children }) => {
  return (
    <img src={src} alt={"alt"} className={className}>
      {children}
    </img>
  );
};
