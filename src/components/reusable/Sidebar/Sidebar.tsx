import React from 'react'
import { NavLink } from 'react-router-dom'
import { MdOutlineSpaceDashboard } from 'react-icons/md'
import { PiNoteBlankLight } from 'react-icons/pi'
import { IoLogoGameControllerB } from 'react-icons/io'
import { IoCheckmarkDoneCircle } from 'react-icons/io5'
import { GrCertificate } from 'react-icons/gr'
import { TbLogout2 } from 'react-icons/tb'
import logo from '../../../assets/logo.png'
import Togglebtn from './Togglebtn'

const Sidebar = (): JSX.Element => {
  return (
    <div className="bg-background w-[290px] p-5 h-screen sticky top-0 hidden lg:block">
      {/* Logo */}
      <div className="flex justify-center">
        <img className="w-16 mb-16" src={logo} alt="" />
      </div>

      {/* Navlinks */}
      <div className="flex flex-col gap-4">
        <NavLink
          to={'/dashboard/myCourse'}
          className={({ isActive, isPending }) =>
            isPending
              ? 'pending'
              : isActive
                ? 'text-primary-55 h-[45px] rounded-xl bg-primary-95 p-3 flex items-center gap-3 text-[16px] font-roboto font-normal'
                : ' text-neutral-40 h-[45px] rounded-xl bg-neutral-100 p-3 flex items-center gap-3 text-[16px] font-roboto font-normal'
          }
        >
          <MdOutlineSpaceDashboard /> My Course
        </NavLink>

        <NavLink
          to={'/dashboard/myAssignment'}
          className={({ isActive, isPending }) =>
            isPending
              ? 'pending'
              : isActive
                ? 'text-primary-55 h-[45px] rounded-xl bg-primary-95 p-3 flex items-center gap-3 text-[16px] font-roboto font-normal'
                : ' text-neutral-40 h-[45px] rounded-xl bg-neutral-100 p-3 flex items-center gap-3 text-[16px] font-roboto font-normal'
          }
        >
          <PiNoteBlankLight /> My Assignment
        </NavLink>

        <NavLink
          to={'/'}
          className={({ isActive, isPending }) =>
            isPending
              ? 'pending'
              : isActive
                ? 'text-primary-55 h-[45px] rounded-xl bg-primary-95 p-3 flex items-center gap-3 text-[16px] font-roboto font-normal'
                : ' text-neutral-40 h-[45px] p-3 flex items-center gap-3 text-[16px] font-roboto font-normal'
          }
        >
          <IoLogoGameControllerB /> Games
        </NavLink>

        <NavLink
          to={'/'}
          className={({ isActive, isPending }) =>
            isPending
              ? 'pending'
              : isActive
                ? 'text-primary-55 h-[45px] rounded-xl bg-primary-95 p-3 flex items-center gap-3 text-[16px] font-roboto font-normal'
                : ' text-neutral-40 h-[45px] p-3 flex items-center gap-3 text-[16px] font-roboto font-normal'
          }
        >
          <IoCheckmarkDoneCircle /> Refer & Earn
        </NavLink>

        <NavLink
          to={'/'}
          className={({ isActive, isPending }) =>
            isPending
              ? 'pending'
              : isActive
                ? 'text-primary-55 h-[45px] rounded-xl bg-primary-95 p-3 flex items-center gap-3 text-[16px] font-roboto font-normal'
                : ' text-neutral-40 h-[45px] p-3 flex items-center gap-3 text-[16px] font-roboto font-normal'
          }
        >
          <GrCertificate /> Certificate
        </NavLink>
      </div>

      <div className="flex flex-col gap-6 mt-5">
        {/* Light & Dark mode button */}
        <Togglebtn></Togglebtn>

        <button className="text-neutral-40 h-[45px] p-3 flex items-center gap-3 text-[16px] font-roboto font-normal transform transition-transform duration-300 hover:-translate-y-0.5">
          <TbLogout2 /> Logout
        </button>
      </div>
    </div>
  )
}

export default Sidebar
