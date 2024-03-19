import type { JSX } from 'react'
import arrowUp from '../../assets/icons/arrow-up.svg'

import linkIcon from '../../assets/icons/link-2.svg'
import docIcon from '../../assets/icons/document-text.svg'
import PrimaryButton from '../../components/buttons/PrimaryButton'
import VIDEO_DATA from '../../assets/mockData/video'
import { Link } from 'react-router-dom'
import CoursePart from './CoursePart'
const VideoSection = (): JSX.Element => {
  return (
    <div className="bg-background padding-default w-full h-full dark">
      <div className="h-[50px] w-full"></div>
      <main className="flex gap-6 flex-col lg:flex-row">
        <div className="flex-grow flex gap-6 flex-col">
          <div className="flex flex-col gap-3">
            <span className="body-text-md text-neutral-10">
              Lesson 12 of 118
            </span>
            <div className="flex justify-between items-center">
              <h2 className="h2 text-neutral-10">Topic Name</h2>
              <div className="flex gap-5">
                <button>
                  <img src={arrowUp} alt="link icon" className="-rotate-90" />
                </button>
                <button>
                  <img src={arrowUp} alt="link icon" className="rotate-90" />
                </button>
              </div>
            </div>
          </div>
          <img
            src={VIDEO_DATA.img}
            className="w-full max-h-[80vh] h-auto object-cover object-center"
          />
          <div className="flex flex-col gap-4 mt-2">
            <h4 className="sub-heading text-neutral-10">Summary</h4>
            <p className="body-text-md text-neutral-40">{VIDEO_DATA.summary}</p>
          </div>
          <div className="flex flex-col gap-4 mt-2">
            <h4 className="sub-heading text-neutral-10">Resources</h4>
            <div className="flex flex-col gap-3">
              {VIDEO_DATA.resources.map((resource, index) => (
                <Link
                  to={resource.link}
                  key={index}
                  target="_blank"
                  className="w-full bg-neutral-95 rounded-xl p-3 flex gap-4 text-neutral-10"
                >
                  <img src={linkIcon} alt="link icon" />
                  <span>{resource.name}</span>
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4 mt-2">
            <h4 className="sub-heading text-neutral-10">Assignment</h4>
            <div className="flex flex-col gap-3">
              {VIDEO_DATA.assignments.map((assignment, index) => (
                <div
                  key={index}
                  className="w-full bg-neutral-95 h-[54px] rounded-xl px-3 py-2 flex gap-4 justify-between text-neutral-10"
                >
                  <span className="flex gap-4 items-center">
                    <img src={docIcon} alt="link icon" />
                    <span className="min-w-max">{assignment.name}</span>
                  </span>
                  <Link
                    to={assignment.link}
                    target="_blank"
                    className="h-full rounded-lg bg-neutral-90 text-[16px] flex items-center justify-center px-7 py-2"
                  >
                    Add
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4 mt-2">
            <h4 className="sub-heading text-neutral-10">FAQs</h4>
          </div>
          <PrimaryButton
            style={{
              maxWidth: 'max-content',
            }}
          >
            Move to next?
          </PrimaryButton>
        </div>
        {/* right side content  */}
        <div className="w-full lg:min-w-[420px] lg:max-w-[600px] flex flex-col items-center gap-[20px] mt-12">
          <div className="flex justify-between items-center border border-neutral-90 rounded-[20px] py-5 w-full px-10 h-[162px]">
            <h2 className="h2 text-neutral-10">
              Course <br /> Progress
            </h2>
            <div className="relative">
              <div className="relative w-[120px] h-[120px] flex items-center justify-center">
                <span className="text-2xl font-semibold text-white z-10">
                  20%
                </span>
              </div>
              <svg
                className="w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                viewBox="0 0 36 36"
              >
                <path
                  className="text-background"
                  d="M18 2.0845
        a 15.9155 15.9155 0 0 1 0 31.831
        a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="primary-30"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  className="text-primary-30"
                  d="M18 2.0845
        a 15.9155 15.9155 0 0 1 0 31.831
        a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeDasharray="100, 100"
                  strokeDashoffset="75"
                  strokeWidth="2.5"
                />
              </svg>
            </div>
          </div>
          <div className="flex flex-col gap-5 w-full">
            {VIDEO_DATA.parts.map((part, index) => (
              <CoursePart key={index} i={index} {...part} />
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
export default VideoSection
