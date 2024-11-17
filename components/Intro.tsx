'use client'
import { useEffect } from 'react'
import { gsap } from 'gsap'
import Image from 'next/image'

export default function Intro() {
  useEffect(() => {
    // GSAP Animation for floating balls
    gsap.to('.ball', {
      y: 'random(-50, 50)',
      x: 'random(-50, 50)',
      scale: 'random(0.8, 1.2)',
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
    })
  }, [])

  return (
    <>
      <div className="introduction h-[500px] w-screen flex flex-col md:flex-row items-center justify-between relative overflow-hidden border-b-2">
        {/* Colorful Balls */}
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={index}
            className={`ball absolute bg-gradient-to-r from-pink-400 to-purple-500 rounded-full`}
            style={{
              width: `${Math.random() * 50 + 30}px`,
              height: `${Math.random() * 50 + 30}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.8,
            }}
          ></div>
        ))}

        {/* Content Section */}
        <div className="left w-full md:w-[50%] h-full p-4 md:p-6 pt-8 md:pt-11 z-10 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-green-700">
            "Smart Farming,
            <br />
            Smarter Future!"
          </h1>
          <p className="mt-6 md:mt-[100px] text-lg md:text-2xl font-bold text-slate-700">
            Discover how our IoT-enabled Smart Irrigation System revolutionizes
            agriculture.
          </p>
        </div>

        {/* Image Section */}
        {/* Image Section */}
        <div className="right w-full md:w-[50%] z-10 flex justify-center md:justify-end">
          <Image
            src="/farmcs/front.png"
            alt="Smart Farming"
            className="rounded-xl shadow-xl object-contain max-w-full h-auto md:max-w-[80%] lg:max-w-[90%]"
            width={800}
            height={1300}
          />
        </div>
      </div>

      {/* Bottom Paragraph */}
      <p className="text-lg md:text-2xl font-bold text-green-800 mx-4 md:mr-2 md:ml-3 mt-4 text-center md:text-left ">
        Inefficient water usage, manual farming challenges, and low yields are
        major hurdles in modern farming.
      </p>
    </>
  )
}
