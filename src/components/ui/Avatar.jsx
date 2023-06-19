import React, { useState } from 'react'
import AvatarImg from "../../assets/svg/avatar.svg"

export default function Avatar({imgUrl}) {
  const [imageError, setImageError] = useState(false)


  return (
    <div className='h-[6rem] w-[6rem] rounded-full border border-background bg-background flex items-center justify-center'>
      
      {imageError? <img src={ AvatarImg} alt="" className='h-[6rem] w-[6rem] rounded-full'/> : 
      <img src={ AvatarImg} alt="" className='h-[6rem] w-[6rem] rounded-full' onError={()=>setImageError(true)}/>
      }
      </div>
  )
}
