import Navbar from '../../components/navbar'
import Home from './Home'
import type { JSX } from 'react'

const HomePage = (): JSX.Element => {
  return (
    <div className="dark bg-background">
      <Navbar />
      <main className="mt-[64px] xl:mt-[80px]">
        <Home />
      </main>
    </div>
  )
}
export default HomePage
