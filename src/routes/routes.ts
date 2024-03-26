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
    path: '/dashboard/myCourse',
    component: lazy(
      async () => await import('../pages/Dashboard/DashboardPages/MyCourse')
    ),
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
]

export default ROUTES
