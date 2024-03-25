import React from 'react'
import DashboardLayout from '../../../components/layouts/DashboardLayout'
import EnrolledCourse from './CourseDataProvider/CourseDataProvider'

const MyCourse = (): JSX.Element => {
  return (
    <DashboardLayout>
      <div>
        <EnrolledCourse></EnrolledCourse>
      </div>
    </DashboardLayout>
  )
}

export default MyCourse
