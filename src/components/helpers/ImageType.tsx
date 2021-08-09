import React from 'react'
// import { PhotosType } from '../../types/Types'

interface Props{
   width?: string
   margin?: string | null
   className?: string
   Avatar?: string
   profile?: any
   src?: string | undefined
   alt?: string | undefined
   onClick?: any
   avatar?: string
}

export const ImageType:React.FC <Props> = ({ className, src, children }) => {
   return (
      <img src={src} className={className}>{children}</img>
   )
}