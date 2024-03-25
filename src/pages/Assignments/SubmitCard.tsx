import { useRef, useState } from 'react'
import arrowDown from '../../assets/icons/arrow-down.svg'
import uploadIcon from '../../assets/icons/upload.svg'
import { motion } from 'framer-motion'
import PrimaryButton from '../../components/buttons/PrimaryButton'
import SecondaryButton from '../../components/buttons/SecondaryButton'
const SubmitCard = ({
  task,
  i,
}: {
  task: {
    title: string
    isSubmitted: boolean
  }
  i: number
}): JSX.Element => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const imgInputRef = useRef<HTMLInputElement>(null)
  const [file, setFile] = useState<File | null | string>(null)
  return (
    <motion.div
      className={`w-full px-5 rounded-xl flex flex-col overflow-hidden gap-6 ${
        isSubmitting
          ? 'border-[#6E40FFCC] border-[1.5px] py-5 '
          : 'border-neutral-20 dark:border-neutral-90  border py-3'
      }`}
      style={{
        boxShadow: isSubmitting ? '0px 4px 60px 0px #6E40FF29' : '',
      }}
    >
      <div className="flex justify-between">
        <div className="flex flex-col">
          <span className="body-text-sm text-neutral-60">Task {i + 1}</span>
          <span className="body-text-lg text-neutral-100 dark:text-neutral-10">
            {task.title}
          </span>
        </div>
        {task.isSubmitted ? (
          <button className="border border-neutral-20 dark:border-neutral-90 dark:text-neutral-40 rounded-lg px-5 py-0 text-neutral-60">
            View
          </button>
        ) : (
          <>
            {file === null ? (
              <button
                onClick={() => {
                  setIsSubmitting((prev) => !prev)
                }}
                className="flex bg-[#6E40FF1F] px-4 rounded-lg items-center justify-center gap-4 text-[#6E40FF]"
              >
                <span>Submit Now</span>
                <img
                  src={arrowDown}
                  alt="arrow down"
                  className={`transition-all transform ${isSubmitting ? 'rotate-180' : ''}`}
                />
              </button>
            ) : (
              <PrimaryButton>Submit Now</PrimaryButton>
            )}
          </>
        )}
      </div>
      {!task.isSubmitted && isSubmitting && file === null && (
        <motion.form className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Past any url"
            pattern="https?://.+"
            className="border border-neutral-20 dark:bg-background dark:border-neutral-90 rounded-lg px-4 py-2"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault()
                setIsSubmitting(false)
                setFile(
                  e.currentTarget.value.length < 1
                    ? null
                    : e.currentTarget.value
                )
              }
            }}
          />
          <div className="relative h-0.5 w-full bg-neutral-20 dark:bg-neutral-90 rounded-lg my-1">
            <span className="absolute top-1/2 dark:bg-background dark:text-neutral-30 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-2">
              or
            </span>
          </div>
          <input
            onChange={(e) => {
              setFile(e.target.files?.[0] ?? null)
            }}
            ref={imgInputRef}
            type="file"
            className="hidden"
          />
          <button
            role="button"
            type="button"
            onClick={() => {
              imgInputRef.current?.click()
            }}
            className="border border-neutral-20 dark:border-neutral-90 rounded-lg px-5 py-8 flex items-center justify-center flex-col gap-2"
          >
            <img src={uploadIcon} alt="upload" />
            <div className="body-text-md text-neutral-50 dark:text-neutral-60">
              Drop any file here or{' '}
              <span className="text-[#6E40FF]">Upload a file</span>
            </div>
            <span className="body-text-sm text-neutral-40 dark:text-neutral-60">
              Upload files: PNG, JPG, PDF. It should not more than 20MB
            </span>
          </button>
        </motion.form>
      )}
      {file !== null && (
        <div className="flex items-center gap-5">
          <div className="border border-neutral-20 dark:border-neutral-90 rounded-lg px-4 py-2 flex-grow">
            {typeof file === 'string' ? (
              <a
                href={file}
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                {file}
              </a>
            ) : (
              file.name
            )}
          </div>
          <SecondaryButton
            onClick={() => {
              setFile(null)
            }}
          >
            Cancel
          </SecondaryButton>
        </div>
      )}
    </motion.div>
  )
}
export default SubmitCard
