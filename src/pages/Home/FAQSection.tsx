import FAQ from '../../assets/data/faq'
import SectionHeader from './SectionHeader'
import type { JSX } from 'react'
import FAQs from '../../components/reusable/FAQs'

const FAQSection = (): JSX.Element => {
  return (
    <section
      id="faq"
      className="flex flex-col items-center justify-center gap-12 overflow-hidden wrapper sm:overflow-visible"
    >
      <SectionHeader {...FAQ} />
      <FAQs faqs={FAQ.faqs} />
    </section>
  )
}
export default FAQSection
