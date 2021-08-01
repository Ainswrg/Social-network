import React from 'react'

interface Props{
   bgColor?: string
   className?: string
   border?: string
   colorText?: string
   radius?: string
   padding?: string
   primary?: boolean
   clicked?: boolean
   onClick?: () => void
   user?: string | null;
   rgba?: string
}

export const ButtonType:React.FC <Props> = ({className, children, onClick}) => {
   return (
      <button onClick={onClick} className={className}>{children}</button>
   )
}
export const UlType:React.FC <Props> = ({className, children}) => {
   return (
      <ul className={className}>{children}</ul>
   )
}
export const SpanType:React.FC <Props> = ({className, children}) => {
   return (
      <span className={className}>{children}</span>
   )
}