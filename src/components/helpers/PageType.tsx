import React from 'react';

interface Props {
  className?: string;
  display?: string | undefined;
  margin?: string;
  padding?: string;
  flex?: string;
  bg?: string;
  height?: string;
  width?: string;
  direction?: string;
  maxW?: string;
  mixW?: string;
  grow?: string;
  justify?: string;
  items?: string;
  position?: string;
  rounded?: string;
  shadow?: string;
  z?: string;
  primary?: boolean;
  active?: boolean;
  center?: string;
  vh?: boolean;
  currentPage?: number;
  p?: number;
  clicked?: boolean;
  isAuth?: boolean;
  onClick?: (e?: any) => void;
  portionSize?: number;
  color?: string;
  user?: string | null;
  gridTemplate?: string;
  border?: string;
  dirty?: boolean
  touched?: boolean
  values?: string | boolean
  onSubmit?: any
  id?: string | undefined
}

export const PageType: React.FC<Props> = ({ className, children, onClick }) => {
  return (
    <div onClick={onClick} className={className}>
      {children}
    </div>
  );
};
