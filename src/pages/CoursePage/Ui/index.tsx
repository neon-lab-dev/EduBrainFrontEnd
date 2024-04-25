import Navbar from '../../../components/navbar'
import type { JSX } from 'react'
import { useParams } from 'react-router-dom' // Importing useParams
import UI from './UI'
import Course from '../../../assets/data/CourseData/CourseData'
import { getAllCourses } from '../../../api/courses'
import { useQuery } from '@tanstack/react-query'
import { ICourse } from '../../../types/course.types'


const HomePage = (): JSX.Element => {
  const { data, isLoading, isError } = useQuery<ICourse[]>({
    queryKey: ['courses'],
    queryFn: getAllCourses,
  })
  const { page } = useParams() // Getting the 'page' parameter from the Url
  console.log(data)
  return (
    <div className="dark bg-background">
      <Navbar />
      <main className="mt-[64px] xl:mt-[80px]">
        {/* Use braces to wrap the comments */}
        {page === 'uiux' && <UI data={Course['UI/UX']} />}
        {/* Use braces to wrap the comments */}
        {page === 'powerbi' && <UI data={Course.powerbi} />}
        {/* Use braces to wrap the comments */}
        {page === 'mernstack' && <UI data={Course.Mern} />}
        {/* Use braces to wrap the comments */}
        {page === 'python' && <UI data={Course.Python} />}
        {/* Use braces to wrap the comments */}
        {page === 'datascience' && <UI data={Course.DataScience} />}
      </main>
    </div>
  )
}
export default HomePage
