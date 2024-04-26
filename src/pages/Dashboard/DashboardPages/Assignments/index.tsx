import { useState, type JSX, useEffect } from 'react'
import ASSIGNMENTS from '../../../../assets/mockData/assignments'
import AssessmentCard from './AssignmentCard'
import {
  filterAssignments,
  getTabButtons,
} from '../../../../utils/assignmentsUtils'
import DashboardLayout from '../../../../components/layouts/DashboardLayout'

const AssignmentPage = (): JSX.Element => {
  const [selectedCourse, setSelectedCourse] = useState(ASSIGNMENTS[0].course)
  const [courseData, setCourseData] = useState(ASSIGNMENTS[0])
  const [selectedAssignmentType, setSelectedAssignmentType] =
    useState<string>('All')

  useEffect(() => {
    const course = ASSIGNMENTS.find(
      (assignment) => assignment.course === selectedCourse
    )
    if (course !== undefined) setCourseData(course)
  }, [selectedCourse])

  return (
    <DashboardLayout>
      <main className="h-full w-full flex flex-col gap-5 min-h-[calc(100vh-100px)]">
        <div className="mt-12 flex flex-col gap-4">
          <h3 className="h3 dark:text-neutral-10">My Assignments</h3>
          <hr className="w-full h-0.5 dark:text-neutral-10/10 text-neutral-30" />
        </div>
        <div className="flex justify-between dark:text-neutral-10/80">
          <div className="flex gap-4 items-center">
            {getTabButtons(courseData.assignments).map((tab, i) => (
              <button
                key={i}
                className={`
                  border rounded-lg py-1 px-4 min-w-12 body-text-md 
                  ${
                    selectedAssignmentType === tab
                      ? 'dark:border-white/60 border-neutral-60 dark:text-neutral-10 '
                      : 'dark:border-white/10 border-neutral-30 dark:text-neutral-40 text-neutral-70'
                  }`}
                onClick={() => {
                  setSelectedAssignmentType(tab)
                }}
              >
                {tab}
              </button>
            ))}
          </div>
          <select
            className="max-w-fit cursor-pointer bg-[transparent] border border-neutral-30 text-neutral-90 dark:text-neutral-30 dark:border-white/30 px-3 rounded-lg py-2"
            value={selectedCourse}
            onChange={(e) => {
              setSelectedCourse(e.currentTarget.value)
            }}
          >
            {ASSIGNMENTS.map((assignment, i) => (
              <option
                key={i}
                value={assignment.course}
                className="dark:text-neutral-10 text-neutral-80 dark:bg-neutral-90"
              >
                {assignment.course}
              </option>
            ))}
          </select>
        </div>
        <div className="flex gap-6">
          <div className="flex items-center justify-center gap-2">
            <div className="bg-green h-4 w-4 rounded-md" />
            <span className="dark:text-neutral-20 text-neutral-80">
              Checked
            </span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="bg-coral h-4 w-4 rounded-md" />
            <span className="dark:text-neutral-20 text-neutral-80">
              Submitted
            </span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="bg-red h-4 w-4 rounded-md" />
            <span className="dark:text-neutral-20 text-neutral-80">
              Pending
            </span>
          </div>
        </div>
        <div className="flex gap-6 flex-wrap">
          {filterAssignments(courseData, selectedAssignmentType).map(
            (assignment, i) => (
              <AssessmentCard i={i} key={i} {...assignment} />
            )
          )}
        </div>
      </main>
    </DashboardLayout>
  )
}
export default AssignmentPage
