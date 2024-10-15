import React from 'react'
import Image from 'next/image'
import Button from './Button'
import Link from 'next/link'
const Hero = () => {

  return (
    <section className=" max-container padding-container flex flex-col gap-20 py-10 md:gap-28 lg:py-20 xl:flex-row    relative  h-[120%] sm:min-h-[80vh]">
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2 ">
        <Image
          src="/leave.png"
          alt="camp"
          width={70}
          height={70}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px] mb-5"
        />
        <h1 className="text-2xl lg:bold-88 font-bold lg:text-10xl lg:w-[50vw]">
          Revolutionize Farming with <br /> Smart Irrigation
        </h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px] ">
          Experience precision agriculture with IoT-driven solutions for
          optimized water management, crop protection, and resource efficiency.
        </p>
        <h4 className="regular-16 mt-6  xl:max-w-[520px]">
          Discover how our smart irrigation systems can transform your farm
          today.
        </h4>
        <div className="my-11 flex flex-wrap  gap-5">
          {/* <div className="flex items-center gap-2 ">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  src="/star.svg"
                  key={index}
                  alt="star"
                  width={24}
                  height={24}
                />
              ))}
          </div>
          <p className="bold-16 lg:bold-20 text-blue-70">
            19k
            <span className="regular-16 lg:regular-20 ml-1 underline">
              Excellent Reviews
            </span>
          </p> */}
          <p className="bold-16 lg:bold-20 text-blue-700 ">Coming Soon</p>
        </div>
        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button
            type="button"
            title="Download App"
            variant="btn_green"
            icon=""
          />
          <Link href="/learnmore">
            <Button
              type="button"
              title="How we work?"
              icon="/play.svg"
              variant="btn_white_text"
            />
          </Link>
        </div>
      </div>

      <Image
        src="/farmcs/Farmcs.jpg"
        alt="farmcs_main_image"
        width={1700}
        height={1200}
        className="w-full h-auto lg:w-1/2 lg:h-full mr-4 lg:mr-[20vw] object-cover rounded-md shadow-lg sm:mr-2"
      />
    </section>
  )
}

export default Hero
