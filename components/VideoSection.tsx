import React from 'react'

const VideoSection = () => {
  return (
    <div className="lg:h-[80vh] w-screen h-[40vh]">
      <video
        className="w-full h-full object-cover"
        src="model/sprinkle.mp4"
        autoPlay
        loop
        muted
      />
    </div>
  )
}

export default VideoSection
