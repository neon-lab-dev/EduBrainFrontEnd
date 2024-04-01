import type { JSX } from 'react'
import arrowUp from '../../assets/icons/arrow-up.svg'

import linkIcon from '../../assets/icons/link-2.svg'
import docIcon from '../../assets/icons/document-text.svg'
import PrimaryButton from '../../components/buttons/PrimaryButton'
import VIDEO_DATA from '../../assets/mockData/video'
import { Link } from 'react-router-dom'
import CoursePart from './CoursePart'
import FAQSection from './FAQSection'
import DashboardHeader from '../Dashboard/DashboardHeader/DashboardHeader'
const VideoSection = (): JSX.Element => {
  return (
    <div className="dark:bg-background bg-background-light padding-x py-12 w-full h-full">
      <DashboardHeader from="videoSection" />
      <main className="flex gap-6 flex-col lg:flex-row mt-8">
        <div className="flex-grow flex gap-6 flex-col">
          <div className="flex flex-col gap-3">
            <span className="body-text-md text-foreground-light dark:text-neutral-10">
              Lesson 12 of 118
            </span>
            <div className="flex justify-between items-center">
              <h2 className="h2 text-foreground-light dark:text-neutral-10">
                Topic Name
              </h2>
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
            <h4 className="sub-heading text-foreground-light dark:text-neutral-10">
              Summary
            </h4>
            <p className="body-text-md text-neutral-60 dark:text-neutral-40">
              {VIDEO_DATA.summary}
            </p>
          </div>
          <div className="flex flex-col gap-4 mt-2">
            <h4 className="sub-heading text-foreground-light dark:text-neutral-10">
              Resources
            </h4>
            <div className="flex flex-col gap-3">
              {VIDEO_DATA.resources.map((resource, index) => (
                <Link
                  to={resource.link}
                  key={index}
                  target="_blank"
                  className="w-full bg-foreground-light/10 dark:bg-neutral-95 rounded-xl p-3 flex gap-4 text-foreground-light dark:text-neutral-10"
                >
                  <img
                    src={linkIcon}
                    alt="link icon"
                    className="invert dark:invert-0"
                  />
                  <span>{resource.name}</span>
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4 mt-2">
            <h4 className="sub-heading text-foreground-light dark:text-neutral-10">
              Assignment
            </h4>
            <div className="flex flex-col gap-3">
              {VIDEO_DATA.assignments.map((assignment, index) => (
                <div
                  key={index}
                  className="w-full bg-foreground-light/10 dark:bg-neutral-95 h-[54px] rounded-xl px-3 py-2 flex gap-4 justify-between text-foreground-light dark:text-neutral-10"
                >
                  <span className="flex gap-4 items-center ">
                    <img
                      src={docIcon}
                      alt="link icon"
                      className="invert dark:invert-0"
                    />
                    <span className="min-w-max">{assignment.name}</span>
                  </span>
                  <Link
                    to={assignment.link}
                    target="_blank"
                    className="h-full rounded-lg bg-neutral-15 dark:bg-neutral-90 text-[16px] flex items-center justify-center px-7 py-2"
                  >
                    Add
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <FAQSection faqs={VIDEO_DATA.faq} />
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
          <div className="flex justify-between items-center border border-foreground-light border-opacity-20 dark:opacity-100 dark:border-neutral-90 rounded-[20px] py-5 w-full px-10 h-[162px]">
            <h2 className="h2 text-foreground-light dark:text-neutral-10">
              Course <br /> Progress
            </h2>

            <div
              className="h-[120px] w-[120px] aspect-square rounded-full bg-white dark:bg-background flex items-center justify-center relative dark:"
              style={{
                filter: 'drop-shadow(0px 0px 91.6px rgba(36, 107, 253, 0.16))',
              }}
            >
              <span className="h3 text-foreground-light dark:text-neutral-10 ">
                {VIDEO_DATA.overallProgress}%
              </span>
              <div className="h-full w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90">
                <svg className="" width="120" height="120">
                  <circle
                    className="stroke-white dark:stroke-background"
                    strokeWidth="4"
                    fill="transparent"
                    r="56"
                    cx="60"
                    cy="60"
                  />
                  <circle
                    className="dark:stroke-primary-30 stroke-primary-50"
                    strokeWidth="8"
                    fill="transparent"
                    r="56"
                    cx="60"
                    cy="60"
                    strokeDasharray={Math.PI * 2 * 56}
                    strokeDashoffset={`${(1 - VIDEO_DATA.overallProgress / 100) * 2 * Math.PI * 56}`}
                  />
                </svg>
              </div>
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
