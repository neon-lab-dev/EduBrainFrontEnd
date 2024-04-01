import type { JSX } from 'react'

interface RootLayoutProps {
  children: React.ReactNode
}

const RootLayout = ({ children }: RootLayoutProps): JSX.Element => {
  return <div className="bg-white dark:bg-background dark">{children}</div>
}
export default RootLayout
