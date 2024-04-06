// eslint-disable-next-line @typescript-eslint/explicit-function-return-type

import Card from './Card'
import Hero from './Hero'
import Curriculum from './Curriculum'
import SliderCard from './Slider'
import Certification from './Certification'
import Sectionlearn from './Sectionlearn'
import Payment from './Subscrition'
import FAQSection from '../../Home/FAQSection'
import SecondaryButton from '../../../components/buttons/SecondaryButton'
import PrimaryButton from '../../../components/buttons/PrimaryButton'
import React from 'react'
import DsData from '../../../assets/data/CourseData/DsData'
import InfoCard from '../../../pages/CoursePage/Ui/InfoCard'


interface UiProps {}

const UI: React.FC<UiProps> = () => {

  return (
    <div className="overflow-hidden">
      <Hero
        title={DsData.title}
        subtitle={DsData.subtitle}
        subtitle1={DsData.subtitle1}
        videoSrc=""
        poster={DsData.poster}
      />
      <Card
        title1={DsData.Cardtitle}
        subtitle={DsData.subtitle}
        subtitle1={DsData.subtitle1}
        benefits={DsData.benefits}
      />
      <InfoCard
       title1={DsData.infoCardtitle}
       subtitle={DsData.infoCardsubtitle}
       subtitle1={DsData.infoCardsubtitle1}
       benefits={DsData.infobenefits}
       />
      <Curriculum />
      <SliderCard />
      <Certification />
      <Sectionlearn />
      <Payment
        package1={{
          title: 'Self-Paced',
          description:
            'Unlock foundational knowledge with our Basic Plan. Ideal for self-paced learners',
          oldPrice: '$1299',
          price: '$999',
          features: [
            'Access to all courses materials',
            'Self-paced learning',
            'Certificate of completion',
          ],
          buttonLabel: 'Start Learning Today',
        }}
        package2={{
          title: 'Mentor Support',
          description:
            'Unlock foundational knowledge with our Basic Plan. Ideal for self-paced learners',
          oldPrice: '$1999',
          price: '$1299',
          features: [
            'Dedicated mentor support',
            'Interactive live sessions',
            'Engaging assignments and projects',
          ],
          buttonLabel: 'Upgrade to Premium Excellence',
        }}
      />
      <FAQSection />
      <div className="py-10">
        <div className="flex flex-col items-center">
          <span className="text-[48px] font-700 font-Roboto text-white max-sm:text-[24px] ">
            Are you Ready to become
          </span>
          <span className="text-[48px] font-700 font-Roboto text-white max-sm:text-[24px]">
            Master in UI/UX design ?
          </span>
          <div className="flex gap-3 py-6 justify-center">
            <SecondaryButton>See the curriculum</SecondaryButton>
            <PrimaryButton>Enroll Now</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UI
