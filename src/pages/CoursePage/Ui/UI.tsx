// eslint-disable-next-line @typescript-eslint/explicit-function-return-type

import Card from "./Card";
import Hero from "./Hero";
import Curriculum from "./Curriculum";
import SliderCard from "./Slider";
import Certification from "./Certification";
// import Sectionlearn from './Sectionlearn';
import UiHome from "../../../assets/data/data/Hero";
import UiCardData from "../../../assets/data/data/Card";
import Payment from "./Subscrition";
import FAQSection from "../../Home/FAQSection";
import SecondaryButton from "../../../components/buttons/SecondaryButton";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import React from 'react';

interface UiProps { }

const UI: React.FC<UiProps> = () => {
  // Check if UiHome is not empty
  if (UiHome.length === 0) {
    return null; // Return null or handle the empty case
  }

  const firstItem = UiHome[0]; // Accessing the first item in UiHome
  const { title, subtitle, subtitle1, poster } = firstItem.Ui; // Destructure Ui object

  return (
    <div className="overflow-hidden">
      <Hero
        title={title}
        subtitle={subtitle}
        subtitle1={subtitle1}
        videoSrc=""
        poster={poster}
      />
      <Card title1="Benefits" subtitle="Why you should become " subtitle1="UI/UX Designer ?" benefits={UiCardData.benefits} />
      <Card title1="Introduction" subtitle="What Our UI/UX Design  ?" subtitle1="Courses Encompasses" benefits={UiCardData.benefits} />
      <Curriculum />
      <SliderCard />
      <Certification />
      {/* <Sectionlearn /> */}
      <Payment
        package1={{
          title: "Self-Paced",
          description: "Unlock foundational knowledge with our Basic Plan. Ideal for self-paced learners",
          oldPrice: "$1299",
          price: "$999",
          features: [
            "Access to all courses materials",
            "Self-paced learning",
            "Certificate of completion"
          ],
          buttonLabel: "Start Learning Today",
        }}
        package2={{
          title: "Mentor Support",
          description: "Unlock foundational knowledge with our Basic Plan. Ideal for self-paced learners",
          oldPrice: "$1999",
          price: "$1299",
          features: [
            "Dedicated mentor support",
            "Interactive live sessions",
            "Engaging assignments and projects"
          ],
          buttonLabel: "Upgrade to Premium Excellence",
        }}
      />
      <FAQSection/>
      <div className='py-10'>
        <div className='flex flex-col items-center'>
          <span className='text-[48px] font-700 font-Roboto text-white max-sm:text-[24px] '>Are you Ready to become</span>
          <span className='text-[48px] font-700 font-Roboto text-white max-sm:text-[24px]'>Master in UI/UX design ?</span>
          <div className="flex gap-3 py-6 justify-center">
            <SecondaryButton>See the curriculum</SecondaryButton>
            <PrimaryButton>Enroll Now</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UI;
