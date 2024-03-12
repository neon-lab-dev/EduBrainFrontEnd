import type { JSX } from 'react'

interface RootLayoutProps {
  children: React.ReactNode
}

const RootLayout = ({ children }: RootLayoutProps): JSX.Element => {
  return <div>{children}</div>
}
export default RootLayout
