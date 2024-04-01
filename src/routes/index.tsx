import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ROUTES from './routes'
import AppLayout from '../components/layouts/RootLayout'
import AppLoading from '../components/loaders/AppLoading'
import type { JSX } from 'react'

const RoutesContainer = (): JSX.Element => {
  return (
    <Router>
      <Routes>
        {ROUTES.map(({ component: Component, path }, index) => {
          return (
            <Route
              key={index}
              path={path}
              element={
                <AppLayout>
                  <Suspense fallback={<AppLoading />}>
                    <Component />
                  </Suspense>
                </AppLayout>
              }
            />
          )
        })}
      </Routes>
    </Router>
  )
}
export default RoutesContainer
