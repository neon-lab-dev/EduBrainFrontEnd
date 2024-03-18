import aboutUsImage from '../../assets/images/image 45.png'
import DescriptionCard from './DescriptionCard'
import hearGlow from '../../assets/images/heart-glow.svg'
import ABOUT_US from '../../assets/data/aboutUs'
import CourseSection from './CourseSection'
import SectionHeader from './SectionHeader'
import CERTIFICATION_AND_ACHIEVEMENT from '../../assets/data/certificationAndAchievement'
import InternshipOpportunities from './InternshipOpportunities'
import CTABanner from './CTABanner'
import FAQSection from './FAQSection'
import Timeline from './Timeline'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import PROCESS from '../../assets/data/process'
import HeroSection from './HeroSection'
import { useInnerSize } from '../../hooks/useInnerSize'
import type { JSX } from 'react'

const Home = (): JSX.Element => {
  const aboutUsRef = useRef(null)
  const { width } = useInnerSize()
  const aboutUsInView = useInView(aboutUsRef, {
    once: true,
  })
  const aboutUsImgRef = useRef(null)
  const aboutUsImgInView = useInView(aboutUsImgRef, {
    once: true,
  })

  return (
    <div className="flex flex-col gap-[120px] xl:gap-48 overflow-hidden px-4 sm:px-10">
      {/* // Hero Section */}
      <HeroSection />
      {/* //about us */}
      <section
        id="about"
        className="flex flex-col items-center justify-center gap-12 sm:gap-16 xl:gap-28"
      >
        <SectionHeader
          header="About us"
          title={ABOUT_US.title}
          desc={ABOUT_US.desc}
        />
        <div className="flex items-center justify-center w-full xl:relative  xl:h-[800px]">
          <motion.div
            {...(width > 1024
              ? {
                  ref: aboutUsRef,
                  initial: { opacity: 0, scale: 0 },
                  animate: aboutUsInView ? { opacity: 1, scale: 1 } : {},
                  transition: { duration: 0.5, delay: 0.5 },
                }
              : {})}
            className="flex flex-col px-4 gap-4 items-center xl:absolute xl:gap-[100px]"
          >
            <div className="flex flex-col gap-4 md:flex-row xl:gap-[242px]">
              <DescriptionCard {...ABOUT_US.cards[0]} />
              <DescriptionCard {...ABOUT_US.cards[1]} />
            </div>
            <div className="flex flex-col gap-4 md:flex-row xl:gap-[460px]">
              <DescriptionCard {...ABOUT_US.cards[2]} />
              <DescriptionCard {...ABOUT_US.cards[3]} />
            </div>
            <DescriptionCard {...ABOUT_US.cards[4]} />
          </motion.div>
          <motion.img
            ref={aboutUsImgRef}
            initial={{ opacity: 0, scale: 0 }}
            animate={aboutUsImgInView ? { opacity: 1, scale: 1 } : {}}
            src={aboutUsImage}
            className="hidden xl:block z-40 w-[493px] h-[369.75px]"
          />
          {/* // hear glow at center  */}
          <img
            src={hearGlow}
            className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2"
            alt=""
          />
        </div>
      </section>

      {/* Our Courses */}
      <section
        id="courses"
        className="flex flex-col items-center justify-center overflow-hidden sm:overflow-visible "
      >
        <SectionHeader
          header="Our Courses"
          title="Unlock Your Potential by our <br/> Tech Courses"
          desc="Explore tech excellence with Edubraining courses. Transformative learning for a future of possibilities."
        />
        <CourseSection />
      </section>

      {/* Process  todo */}
      <section
        id="process"
        className="flex flex-col items-center justify-center gap-12 overflow-hidden wrapper sm:overflow-visible sm:gap-16 xl:gap-28"
      >
        <SectionHeader header="Process" title="Your path to success" />
        <div className="flex flex-col max-w-5xl gap-12 ml-6 text-white lg:ml-auto lg:mx-auto">
          {PROCESS.map((timeline, i) => (
            <Timeline key={i} {...timeline} i={i} />
          ))}
        </div>
      </section>

      {/* Certification  */}
      <section
        id="certification"
        className="flex flex-col items-center justify-center gap-12 overflow-hidden sm:gap-16 xl:gap-28"
      >
        <SectionHeader {...CERTIFICATION_AND_ACHIEVEMENT} />
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5 xl:gap-8">
          {CERTIFICATION_AND_ACHIEVEMENT.cards.map((card, i) => (
            <DescriptionCard key={i} {...card} />
          ))}
        </div>
      </section>

      {/* internship opportunities6 */}
      <InternshipOpportunities />

      {/* cta banner */}
      <CTABanner />

      {/* faq */}
      <FAQSection />

      {/* // for margin */}
      <section className="h-[30vh]"></section>
    </div>
  )
}
export default Home
