import React from "react";

interface Props {
  bgColor?: string;
  className?: string;
  border?: string;
  colorText?: string;
  radius?: string;
  padding?: string;
  primary?: boolean;
  clicked?: boolean;
  onClick?: any;
  user?: string | null;
  rgba?: string;
  type?: string;
  active?: boolean;
}

export const ButtonType: React.FC<Props> = ({
  className,
  children,
  onClick,
}) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};
export const UlType: React.FC<Props> = ({ className, children }) => {
  return <ul className={className}>{children}</ul>;
};
export const SpanType: React.FC<Props> = ({ className, children, onClick }) => {
  return <span onClick={onClick} className={className}>{children}</span>;
};
