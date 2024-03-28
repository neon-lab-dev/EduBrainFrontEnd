import React from 'react'

interface AppProps {
  videoSrc: string
  poster: string
}

const App: React.FC<AppProps> = ({ videoSrc, poster }) => {
  return (
    <div className="flex justify-center p-10 max-sm:p-2">
      <video
        style={{ width: '1100px', borderRadius: '10px' }}
        src={videoSrc}
        controls
        autoPlay
        poster={poster}
      />
    </div>
  )
}

export default App
