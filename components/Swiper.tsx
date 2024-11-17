'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

const ImageSlider = () => {
  const images = ['/farmcs/back.png', '/farmcs/top.png', '/farmcs/side.png']

  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="slider-container mt-4">
      <div className="slider  ">
        {images.map((src, index) => (
          <div
            key={index}
            className={`slide ${currentImage === index ? 'active' : ''}`}
          >
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              layout="fill"
              priority={true} // Load images sooner for smoother transition
              className=" md:p-11 "
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ImageSlider
