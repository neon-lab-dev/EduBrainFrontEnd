import type { JSX } from 'react'
import Button from '../../components/buttons/Button'
import PrimaryButton from '../../components/buttons/PrimaryButton'

interface IAssignmentCard {
  i: number
  status: string
  dueDate: string
  title: string
  tasks: Array<{
    title: string
    status: string
  }>
}

const AssignmentCard = (props: IAssignmentCard): JSX.Element => {
  return (
    <div className="h-[280px] w-[341px] justify-between dark:border-neutral-95 border rounded-2xl p-4 flex flex-col gap-3">
      <div className="flex justify-between dark:text-neutral-10/80 body-text-md">
        <span className="">Assignment {props.i + 1}</span>
        <span className="dark:border-neutral-95 border px-3 py-1 rounded-md">
          {props.status[0].toUpperCase() + props.status.slice(1)}
        </span>
      </div>
      <h3 className="h3 dark:text-neutral-10/90 mt-3">
        {props.title.length > 20
          ? props.title.substring(0, 20) + '...'
          : props.title}
      </h3>
      <div className="flex gap-3 items-center mt-2">
        {props.tasks.map((task, i) => (
          <span
            className={`px-3 py-2 rounded-md ${(() => {
              if (task.status === 'checked') {
                return 'bg-[#29BF1214] bg-opacity-10 dark:text-[#29BF12]'
              } else if (task.status === 'submitted') {
                return 'bg-coral/10 dark:text-coral'
              } else {
                return 'bg-[#EF233C14] bg-opacity-10 dark:text-[#EF233C]'
              }
            })()}`}
            key={i}
          >
            {task.title}
          </span>
        ))}
      </div>
      {(() => {
        if (props.status === 'completed') {
          return (
            <Button className="bg-neutral-95 text-neutral-20">
              View Assignment
            </Button>
          )
        } else if (props.status === 'pending') {
          return (
            <div className="flex gap-4 items-center ">
              <div className="body-text-sm text-neutral-30">
                Deadline:{' '}
                <span className="text-neutral-10 font-Montserrat text-[18px] font-[600] ml-2">
                  {props.dueDate}
                </span>
              </div>
              <PrimaryButton className="!h-[40px] w-full">
                Submit Assignment
              </PrimaryButton>
            </div>
          )
        } else {
          return (
            <div className="flex gap-4 items-center ">
              <div className="body-text-sm text-neutral-30">
                Deadline:{' '}
                <span className="text-neutral-10 font-Montserrat text-[18px] font-[600] ml-2">
                  {props.dueDate}
                </span>
              </div>
              <PrimaryButton className="!h-[40px] w-3/4">
                Submit Now
              </PrimaryButton>
            </div>
          )
        }
      })()}
    </div>
  )
}
export default AssignmentCard
