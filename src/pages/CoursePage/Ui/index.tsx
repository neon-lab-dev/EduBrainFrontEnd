import Navbar from '../../../components/navbar'
import type { JSX } from 'react'
import UI from './UI'
import React from 'react'

const HomePage = (): JSX.Element => {
  return (
    <div className="dark bg-background">
      <Navbar />
      <main className="mt-[64px] xl:mt-[80px]">
        <UI />
      </main>
    </div>
  )
}
export default HomePage
