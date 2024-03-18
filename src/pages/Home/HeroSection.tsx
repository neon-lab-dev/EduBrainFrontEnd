import heroImage from '../../assets/images/Hero Image.svg'
import heroImageOverlay from '../../assets/images/Ellipse 1.svg'
import { Link } from 'react-router-dom'
import type { JSX } from 'react'

const HeroSection = (): JSX.Element => {
  return (
    <section className="flex flex-col justify-center items-center gap-[60px] xl:flex-row xl:gap-28">
      <div className="gap-8 xl:gap-10 flex flex-col items-center xl:items-start mt-16 sm:mt-[100px] xl:mt-[116px]">
        <div className="flex flex-col gap-5 xl:gap-6 items-center justify-center text-center xl:text-start xl:items-start">
          <h1 className="text-[#F5F8FF] font-Montserrat text-[32px] sm:text[40px] leading-[38.4px] sm:leading-[48px] font-[700] text-center xl:text-[64px] xl:text-start xl:leading-[76.8px]">
            Discover the future learning
          </h1>
          <span className="text-base text-[#F5F8FF] leading-[20.8px] sm:text-xl xl:text-2xl xl:leading-[31.2px]">
            AI Enhance courses for high paying job
          </span>
        </div>
        <p className="text-[#7A7C80] text-xs sm:text-sm xl:text-base text-center xl:text-start max-w-[492px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatu
        </p>
        <Link
          to="/course"
          className="text-center bg-[#246BFD] font-Roboto rounded-lg px-6 py-3 text-[#F5F8FF] w-full sm:max-w-[323px] xl:w-[193px] xl:max-w-none"
        >
          Explore Courses
        </Link>
      </div>
      <div className="w-fit relative overflow-hidden xl:mt-[116px] flex items-center justify-center">
        <img
          src={heroImage}
          className="w-full z-10 object-contain object-center max-w-[500px] xl:max-w-[679px] aspect-[1.1/1]"
          alt=""
        />
        {/* // overlay */}
        <img
          src={heroImageOverlay}
          className="absolute h-[152.25px] w-[152.25px] blur-sm top-[200px] right-[100px]"
          alt=""
        />
      </div>
    </section>
  )
}
export default HeroSection
