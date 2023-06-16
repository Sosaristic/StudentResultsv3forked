import React from 'react'
import AvatarImg from "../../assets/svg/avatar.svg"

export default function Avatar() {
  return (
    <div className='h-[6rem] w-[6rem] rounded-full border border-background bg-background flex items-center justify-center'><img src={AvatarImg} alt="" className='h-[6rem] w-[6rem] rounded-full'/></div>
  )
}
