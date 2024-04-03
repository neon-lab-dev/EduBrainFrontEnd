import React from 'react'
import Navbar from '../../components/navbar'
import Home from './Home'
import { useState, type JSX } from 'react'

const HomePage = (): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const handleModal = (): void => {
    setIsModalOpen(!isModalOpen)
  }
  return (
    <div className="dark bg-background">
      <Navbar onClick={handleModal} />
      <main className="mt-[64px] xl:mt-[80px]">
        <Home
          isModalOpen={isModalOpen}
          handleModal={handleModal}
          setIsModalOpen={setIsModalOpen}
        />
      </main>
    </div>
  )
}
export default HomePage
