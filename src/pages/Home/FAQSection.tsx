import FAQ from '../../assets/data/faq'
import SectionHeader from './SectionHeader'
import plus from '../../assets/icons/add-square.svg'
import minus from '../../assets/icons/minus-square.svg'
import { useState } from 'react'
import type { JSX } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const FAQSection = (): JSX.Element => {
  const [activeFaq, setActiveFaq] = useState(null as null | number)
  return (
    <section
      id="faq"
      className="flex flex-col items-center justify-center gap-12 overflow-hidden wrapper sm:overflow-visible"
    >
      <SectionHeader {...FAQ} />
      <div className="flex flex-col w-full max-w-3xl gap-3 mt-6 sm:gap-6">
        {FAQ.faqs.map((faq, i) => (
          <button
            key={i}
            onClick={() => {
              setActiveFaq(activeFaq === i ? null : i)
            }}
            className="flex flex-col gap-4 p-4 sm:px-6 rounded-xl border-2 border-[#313233] w-full overflow-y-hidden"
          >
            <div className="flex items-center justify-between w-full">
              <h3 className="text-[#F5F8FF] text-lg">{faq.question}</h3>
              <img src={activeFaq === i ? minus : plus} className="h-7 w-7" />
            </div>
            <AnimatePresence>
              <motion.p
                initial={{ height: 0 }}
                animate={{
                  height: activeFaq === i ? 'auto' : 0,
                  opacity: activeFaq === i ? 1 : 0,
                }}
                transition={{ duration: 0.1, ease: 'anticipate' }}
                exit={{ height: 0 }}
                className="text-[#AEABB2] pr-1 sm:pr-3 overflow-hidden text-start"
              >
                {faq.answer}
              </motion.p>
            </AnimatePresence>
          </button>
        ))}
      </div>
    </section>
  )
}
export default FAQSection
