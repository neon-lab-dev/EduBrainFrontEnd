import React from 'react';
import calender from "../../../../assets/calendar.svg";
import timer from "../../../../assets/timer-start.png";
import { FaPlay } from "react-icons/fa";
import clock from "../../../../assets/clock.png";
import userIcon from "../../../../assets/user-square.png";
// import PropTypes from 'prop-types';

interface CourseDetails {
  img: any;
  courseName: string;
  lecture?: string;
  duration?: string;
  startDate?: string;
  startTime?: string;
  enrollDate?: string;
  time?: string;
  completedModule?: string;
  module?: string;
  startIn?: string;
}

const CourseCard = ({ details }: { details: CourseDetails }): JSX.Element => {
  return (
    <div className="w-[318px] border border-neutral-55 rounded-2xl">
      <img className="rounded-t-2xl mb-2 " src={details?.img} alt="" />
      <div className="px-4 pb-2">
        <h1 className="text-lg text-neutral-10 font-bold font-roboto mb-[3px]">
          { details?.courseName}
        </h1>

        {details?.lecture !==undefined? (
          <div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2 mb-4">
                <img src={userIcon} alt="" />
                <p className="text-base text-neutral-40 font-light font-roboto">
                  {details?.lecture}
                </p>
              </div>

              <div className="flex items-center gap-2 mb-2">
                <img src={clock} alt="" />
                <p className="text-base text-neutral-40 font-light font-roboto">
                  {details.duration}
                </p>
              </div>
            </div>

            <div className="flex gap-3 items-center w-full">
              <button className="text-neutral-10 text-base px-4 py-3 bg-neutral-85 rounded-xl w-1/2">
                View Detail
              </button>

              <button className="text-neutral-10 text-base px-4 py-3 bg-primary-60 hover:bg-blue-700 transition duration-300 rounded-xl w-1/2">
                Enroll Now!
              </button>
            </div>
          </div>
        ) : (
          <div>
            {details?.startDate !==undefined ? (
              <div className="flex justify-between items-center mb-5">
                <div className="flex items-center gap-2">
                  <img className="w-6" src={calender} alt="" />
                  <p className="text-base text-neutral-40 font-light font-roboto">
                    {details?.startDate}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <img src={clock} alt="" />
                  <p className="text-base text-neutral-40 font-light font-roboto">
                    {details.startTime}
                  </p>
                </div>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <img src={calender} alt="" />
                  <p className="text-[12px] text-neutral-10 font-normal font-roboto">
                    {details?.enrollDate}
                  </p>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <img src={timer} alt="" />
                  <p className="text-base text-neutral-10 font-normal font-roboto">
                    {details.time}
                  </p>
                </div>

                <div className="flex items-center justify-between gap-2 mb-4">
                  
                <div className={`flex h-2  w-[300px] mx-auto items-center justify-center rounded-full bg-neutral-55`}>
        <div style={{ width: `${details?.completedModule}%` }} className={`transition-width mr-auto h-2 w-0 rounded-full  bg-primary-55 duration-500`}></div>
    </div>
                  <p className="text-base text-neutral-10 font-normal font-roboto">
                    {details.completedModule ?? 0}%
                  </p>
                </div>
              </div>
            )}

            {details?.startIn !==undefined ? (
              <div className="flex justify-between items-center">
                <div>
                  <h1 className="text-base text-neutral-40 font-normal font-roboto mb-[3px]">
                    It will start in
                  </h1>
                  <p className="text-[18px] text-neutral-10 font-bold font-roboto">
                    {details?.startIn}
                  </p>
                </div>

                <button className="text-neutral-10 text-base px-9 py-3 bg-primary-60 hover:bg-blue-700 transition duration-300 rounded-xl">
                  View Details
                </button>
              </div>
            ) : (
              <div className="flex justify-between items-center">
                <div>
                  <h1 className="text-base text-neutral-10 font-bold font-roboto mb-[3px]">
                    <span className="text-xs sm:text-sm md:text-base">
                      {details.completedModule}/{details.module}
                    </span>
                  </h1>
                  <p className="text-[12px] text-neutral-10 font-normal font-roboto">
                    Completed lectures
                  </p>
                </div>
                <button className="flex gap-2 items-center justify-center text-neutral-10 text-base px-9 py-3 bg-primary-60 hover:bg-blue-700 transition duration-300 rounded-xl">
                  Resume
                  <FaPlay />
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseCard;
