import React from 'react'
import {ImMenu} from "react-icons/im"
import {img1} from "../../../assets/index"
import { FaBell } from 'react-icons/fa'
import { useAppContext } from '../../../context/AppContext'

export default function DashboardHeader() {
  const {setOpenSideNav} = useAppContext()
  return (
    <header className='h-[4rem] flex gap-4 w-full items-center px-4 bg-v-dark-green text-grey-white'>
        <div onClick={()=>setOpenSideNav(true)} className='text-[2rem] lg:hidden'><ImMenu /></div>
        <div className='flex gap-2 items-center font-righteous'>
            <img src={img1} alt="" height={30} width={30}/>
            <p className='hidden md:block'>Federal University of Technology Owerri</p>
            <p className='block md:hidden'>FUTO</p>

        </div>
        <div className='text-[2rem] relative ml-auto lg:mr-8'><FaBell />
        <span className='absolute flex items-center justify-center bg-orange-600 text-grey-white w-[1.2rem] h-[1.2rem] text-[.8rem] rounded-full top-[-.5rem] -right-1'>1</span>
        </div>
    </header>
  )
}
