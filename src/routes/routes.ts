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
    path: '/dashboard/assignments',
    component: lazy(async () => await import('../pages/Assignments')),
  },
]

export default ROUTES
