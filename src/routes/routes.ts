import type { LazyExoticComponent } from 'react'
import { lazy } from 'react'

interface IRoute {
  path: string
  component: LazyExoticComponent<() => JSX.Element>
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
    path: '/video',
    component: lazy(async () => await import('../pages/VideoSection')),
  },
]
export default ROUTES
