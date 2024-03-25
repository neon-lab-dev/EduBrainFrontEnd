import React,{ useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import DashboardSidebar from "../DashboardSidebar/DashboardSidebar";
import Notifications from "./Notifications/Notifications";

const DashboardHeader = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const [isNotificationOpen, setNotificationOpen] = useState(false);

  const toggleDropdown = (): void => {
    setIsOpen(!isOpen);
  };

  const toggleNotification = (): void => {
    setNotificationOpen(!isNotificationOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent): void => {
      const closestDropdown = (event.target as HTMLElement).closest(".dropdown");
      if (isOpen && closestDropdown === null) {
        setIsOpen(false);
      }
    };
  
    document.addEventListener("mousedown", handleOutsideClick);
  
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent): void => {
      const closestDropdown = (event.target as HTMLElement).closest(".sidebar");
      if (isNotificationOpen && closestDropdown === null) {
        setNotificationOpen(false);
      }
    };
  
    document.addEventListener("mousedown", handleOutsideClick);
  
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isNotificationOpen]);

  // useEffect(() => {
  //   const handleOutsideClick = (event: MouseEvent): void => {
  //     const closestDropdown = (event.target as HTMLElement).closest(".dropdown");
  //     if (isOpen || isNotificationOpen && closestDropdown === null) {
  //       setNotificationOpen(false);
  //       setIsOpen(false);
  //     }
  //   };
  
  //   document.addEventListener("mousedown", handleOutsideClick);
  
  //   return () => {
  //     document.removeEventListener("mousedown", handleOutsideClick);
  //   };
  // }, [isOpen, isNotificationOpen]);
  
  

  return (
    <div className="mb-12">
      <div className="flex justify-between items-center ">
        <h1 className="text-[32px] text-neutral-10 font-semibold font-roboto hidden md:flex">Hello, Rahul</h1>
        <div className="flex md:hidden">
          <DashboardSidebar/>
        </div>


{/* Right side search bar, notification, user image */}
          <div className="flex items-center gap-[22px]">

            {/* Search bar */}
          <div className="relative w-[320px] hidden md:block">
          <input type="text" className="text-white bg-neutral-100 border border-neutral-55 rounded-xl px-4 py-3 w-[320px] outline-none focus:border-primary-60 hover:border-blue-800 transition duration-300" placeholder="Search" />
          <CiSearch className="text-neutral-10 w-6 h-6 absolute right-2 bottom-3 cursor-pointer"/>
          </div>

          <div className="relative sidebar">
            {/* Notification */}
          <IoNotificationsOutline onClick={toggleNotification} className="text-neutral-10 w-8 h-8 cursor-pointer"/>

          {
            isNotificationOpen && 
            <div className="absolute right-0 z-10">
              <Notifications/>
            </div>
          }
          </div>


    <div className="relative dropdown">
      <div onClick={toggleDropdown} className="w-12 rounded-full cursor-pointer">
          <img className="rounded-full" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="avatar" />
        </div>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 z-10 origin-top-right bg-neutral-100 rounded-lg shadow-lg border border-primary-60 p-2">
          <div className="py-1">
            <p
              className="text-neutral-10 block px-2 py-2 text-sm hover:bg-primary-60 transition duration-300 cursor-pointer rounded-lg"
            >
              Home
            </p>
            <p
              className="text-neutral-10 block px-2 py-2 text-sm hover:bg-primary-60 transition duration-300 cursor-pointer rounded-lg"
            >
              Setting
            </p>
            <p
              className="text-neutral-10 block px-2 py-2 text-sm hover:bg-primary-60 transition duration-300 cursor-pointer rounded-lg"
            >
              All Course
            </p>
            <p
              className="text-neutral-10 px-2 py-2 text-sm hover:bg-primary-60 hover:text-white transition duration-300 cursor-pointer rounded-lg flex items-center gap-2"
            >
              Logout
              <FiLogOut/>
            </p>
          </div>
        </div>
      )}
    </div>





          </div>

      </div>
    </div>
  );
};

export default DashboardHeader;
