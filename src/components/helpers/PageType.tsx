import React from 'react'

interface Props{
   className?: string
   display?: string
   margin?: string
   padding?: string
   flex?: string
   bg?: string
   height?: string
   width?: string
   direction?: string
   maxW?: string
   mixW?: string
   grow?: string
   justify?: string
   items?: string
   position?: string
   rounded?: string
   shadow?: string
   z?: string
   primary?: boolean
   active?: boolean
   center?: string
   vh?: boolean
   currentPage?: number
   p?: number
   clicked?: boolean
   isAuth?: boolean
   onClick?: () => void
   portionSize?: number
   color?: string
}

export const PageType:React.FC <Props> = ({className, children, onClick}) => {
   return (
      <div onClick={onClick} className={className}>{children}</div>
   )
}