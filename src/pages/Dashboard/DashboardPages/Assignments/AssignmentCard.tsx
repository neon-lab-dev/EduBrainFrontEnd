import React from 'react'
import type { JSX } from 'react'
import Button from '../../../../components/buttons/Button'
import PrimaryButton from '../../../../components/buttons/PrimaryButton'
import { Link } from 'react-router-dom'

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
    <div className="h-[250px] w-[341px] justify-between dark:border-neutral-95 border rounded-2xl p-4 flex flex-col gap-3">
      <div className="flex justify-between dark:text-neutral-10/80 body-text-md">
        <span className="">Assignment {props.i + 1}</span>
        <span className="dark:border-neutral-95 border-neutral-30 border px-3 py-1 rounded-md">
          {props.status[0].toUpperCase() + props.status.slice(1)}
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="h3 dark:text-neutral-10/90">
          {props.title.length > 20
            ? props.title.substring(0, 20) + '...'
            : props.title}
        </h3>
        <div className="flex gap-3 items-center">
          {props.tasks.map((task, i) => (
            <span
              className={`px-3 py-2 rounded-md ${(() => {
                if (task.status === 'checked') {
                  return 'bg-[#29BF1214] bg-opacity-10 text-[#29BF12]'
                } else if (task.status === 'submitted') {
                  return 'bg-coral/10 text-coral'
                } else {
                  return 'bg-[#EF233C14] bg-opacity-10 text-[#EF233C]'
                }
              })()}`}
              key={i}
            >
              {task.title}
            </span>
          ))}
        </div>
      </div>
      {(() => {
        if (props.status === 'completed') {
          return (
            // todo: change the text color in light mode is not working
            <Button className="dark:bg-neutral-95 bg-neutral-20 text-neutral-85 dark:text-neutral-20">
              View Now
            </Button>
          )
        } else if (props.status === 'pending') {
          return (
            <div className="flex gap-4 items-center ">
              <div className="body-text-sm dark:text-neutral-30 text-neutral-80">
                Deadline:{' '}
                <span className="dark:text-neutral-10 text-neutral-90 font-Montserrat text-[18px] font-[600] ml-2">
                  {props.dueDate}
                </span>
              </div>
              <Link to="/dashboard/myAssignment/submit" className="w-3/4">
                <PrimaryButton className="!h-[40px] w-full">
                  Submit Now
                </PrimaryButton>
              </Link>
            </div>
          )
        } else {
          return (
            <div className="flex gap-4 items-center ">
              <div className="body-text-sm dark:text-neutral-30 text-neutral-80 ">
                Deadline:{' '}
                <span className="dark:text-neutral-10 text-neutral-90 font-Montserrat text-[18px] font-[600] ml-2">
                  {props.dueDate}
                </span>
              </div>
              <PrimaryButton className="!h-[40px] w-3/4">
                Update Now
              </PrimaryButton>
            </div>
          )
        }
      })()}
    </div>
  )
}
export default AssignmentCard
