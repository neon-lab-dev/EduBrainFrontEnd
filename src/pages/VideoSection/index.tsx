import type { JSX } from 'react'
import videoThumbnail from '../../assets/images/Frame 568.svg'
import linkIcon from '../../assets/icons/link-2.svg'
import docIcon from '../../assets/icons/document-text.svg'
import PrimaryButton from '../../components/buttons/PrimaryButton'
const VideoSection = (): JSX.Element => {
  return (
    <div className="bg-background padding-default w-full h-full dark">
      <div className="h-[50px] w-full"></div>
      <main className="flex">
        <div className="flex-grow flex gutter-gap flex-col">
          <span className="body-text-md text-neutral-10">Lesson 12 of 118</span>
          <h2 className="h2 text-neutral-10">Topic Name</h2>
          <img
            src={videoThumbnail}
            className="w-full max-h-[80vh] h-auto object-cover object-center"
          />
          <h4 className="sub-heading text-neutral-10">Summary</h4>
          <p className="body-text-md text-neutral-40">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            con Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatu Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id es
          </p>
          <h4 className="sub-heading text-neutral-10">Resources</h4>
          <div className="flex flex-col gap-3">
            <button className="w-full bg-neutral-95 rounded-xl p-3 flex gap-4 text-neutral-10">
              <img src={linkIcon} alt="link icon" />
              <span>Resource 1</span>
            </button>
            <button className="w-full bg-neutral-95 rounded-xl p-3 flex gap-4 text-neutral-10">
              <img src={linkIcon} alt="link icon" />
              <span>Resource 2</span>
            </button>
          </div>
          <h4 className="sub-heading text-neutral-10">Resources</h4>
          <div className="flex flex-col gap-3">
            <div className="w-full bg-neutral-95 h-[54px] rounded-xl p-3 flex gap-4 justify-between text-neutral-10">
              <span className="flex gap-4 items-center">
                <img src={docIcon} alt="link icon" />
                <span className="min-w-max">
                  Assignment -1 (Assignment name)
                </span>
              </span>
              <button className="h-full rounded-lg bg-neutral-90 text-[16px] flex items-center justify-center px-4 py-2">
                Add
              </button>
            </div>
          </div>
          <h4 className="sub-heading text-neutral-10">FAQs</h4>
          <PrimaryButton
            style={{
              maxWidth: 'max-content',
            }}
          >
            Move to next?
          </PrimaryButton>
        </div>
        <div className="min-w-[411px]"></div>
      </main>
    </div>
  )
}
export default VideoSection
