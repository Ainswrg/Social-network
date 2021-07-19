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
}

export const ButtonType:React.FC <Props> = ({className, children}) => {
   return (
      <button className={className}>{children}</button>
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