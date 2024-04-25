import { useEffect, type JSX } from 'react'
import { handleGetUser } from '../../api/user'
import React from 'react'
import { useQuery } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { setIsAuthenticated, setUser } from '../../store/slices/userSlices'

interface RootLayoutProps {
  children: React.ReactNode
}

const RootLayout = ({ children }: RootLayoutProps): JSX.Element => {
  const dispatch = useDispatch()

  useEffect(() => {
    handleGetUser()
      .then((res) => {
        console.log(res)
      })
      .catch((error) => {
        console.log(error)
      })
  })

  const { isError, isLoading, data } = useQuery({
    queryKey: ['user'],
    queryFn: handleGetUser,
  })

  useEffect(() => {
    if (!isLoading) {
      if (isError) {
        toast.error('You are not logged in')
      } else {
        if (data) {
          dispatch(setIsAuthenticated(true))
          dispatch(setUser(data))
          console.log(data)
        } else {
          console.log("Data doesn't exists.")
        }
      }
    }
  }, [data, isError, isLoading])

  if (isLoading) {
    return <p>Loading</p>
  }
  return <div className="bg-white dark:bg-background">{children}</div>
}
export default RootLayout
