import { useEffect, useRef, useState } from 'react'
import arrowDown from '../../../../assets/icons/arrow-down.svg'
import uploadIcon from '../../../../assets/icons/upload.svg'
import { motion } from 'framer-motion'
import PrimaryButton from '../../../../components/buttons/PrimaryButton'
import SecondaryButton from '../../../../components/buttons/SecondaryButton'
import toast from 'react-hot-toast'
import { MAX_FILE_SIZE_IN_MB } from '../../../../assets/data/constants'
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
  const [isFileDropping, setIsFileDropping] = useState(false)
  const [file, setFile] = useState<File | null | string>(null)

  // Prevent default behavior of drag and drop in the window
  useEffect(() => {
    const preventDefault = (e: DragEvent): void => {
      if ((e.target as Element).id !== 'drop-button') {
        e.preventDefault()
      }
    }
    window.addEventListener('dragover', preventDefault)
    window.addEventListener('drop', preventDefault)

    return (): void => {
      window.removeEventListener('dragover', preventDefault)
      window.removeEventListener('drop', preventDefault)
    }
  }, [])

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
            className="border border-neutral-20 bg-[transparent] dark:border-neutral-90 rounded-lg px-4 py-2 dark:text-neutral-20"
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
            <span className="absolute top-1/2 dark:bg-neutral-100 bg-neutral-10 dark:text-neutral-30 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-2">
              or
            </span>
          </div>
          <input
            onChange={(e) => {
              if (e.target.files === null) return
              if (e.target.files?.length === 0) return
              if (
                e.target.files?.[0]?.size >
                MAX_FILE_SIZE_IN_MB * 1024 * 1024
              ) {
                toast.error(
                  `File size should not be more than ${MAX_FILE_SIZE_IN_MB}MB`
                )
                return
              }
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
            onDrop={(e) => {
              e.preventDefault()
              setIsFileDropping(false)
              if (e.dataTransfer.files.length === 0) return
              if (
                e.dataTransfer.files[0].size >
                MAX_FILE_SIZE_IN_MB * 1024 * 1024
              ) {
                toast.error(
                  `File size should not be more than ${MAX_FILE_SIZE_IN_MB}MB`
                )
                return
              }
              setFile(e.dataTransfer.files[0])
            }}
            onDragOver={(e) => {
              e.preventDefault()
              setIsFileDropping(true)
            }}
            onDragLeave={() => {
              setIsFileDropping(false)
            }}
            style={{
              boxShadow: isFileDropping ? '0px 4px 60px 0px #6E40FF29' : '',
            }}
            className="border border-neutral-20 dark:border-neutral-90 rounded-lg px-5 py-8 flex items-center justify-center flex-col gap-2 transition-all"
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
          <div className="border border-neutral-20 dark:border-neutral-90 rounded-lg px-4 py-2 flex-grow dark:text-neutral-20">
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
              <button
                className="hover:underline"
                onClick={() => {
                  const url = URL.createObjectURL(file)
                  window.open(url, '_blank')
                }}
              >
                {file.name}
              </button>
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
