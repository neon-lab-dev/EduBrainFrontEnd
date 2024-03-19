import type { LazyExoticComponent } from 'react'
import { lazy } from 'react'

interface IRoute {
  path: string // Path of the route
  component: LazyExoticComponent<() => JSX.Element> // Component to render -> lazy import with async await
}

const ROUTES: IRoute[] = [
  {
    path: '/',
    component: lazy(async () => await import('../pages/Home')),
  },
  {
    path: '/video',
    component: lazy(async () => await import('../pages/VideoSection')),
  },
]
export default ROUTES
