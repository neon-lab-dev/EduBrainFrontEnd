import type { LazyExoticComponent, ComponentType } from 'react'
import { lazy } from 'react'
import type { RouteProps } from 'react-router-dom'


type IRoute = RouteProps & {
  component: LazyExoticComponent<ComponentType<any>>

}

const ROUTES: IRoute[] = [
  {
    path: '/',
    component: lazy(async () => await import('../pages/Home')),
  },
  {
    path: '/course',
    component: lazy(async () => await import('../pages/CoursePage/Ui')),
  },
  {
    path: '/dashboard/myAssignment',
    component: lazy(
      async () => await import('../pages/Dashboard/DashboardPages/Assignments')
    ),
  },
  {
    path: '/dashboard/myAssignment/submit',
    component: lazy(
      async () =>
        await import(
          '../pages/Dashboard/DashboardPages/Assignments/SubmitAssignment'
        )
    ),
  },
  {
    path: '/video',
    component: lazy(async () => await import('../pages/VideoSection')),

  },
  {
    path: '/dashboard/certification',
    component: lazy(
      async () => await import('../pages/Dashboard/DashboardCertification')
    ),

  },
]

export default ROUTES
