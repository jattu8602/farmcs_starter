import Intro from '@/components/Intro'
import Swiper from '@/components/Swiper'
import Tech from '@/components/Tech'
import Image from 'next/image'
import Art from '@/components/Art'

export default function LearnMore() {
  return (
    <>
      <Intro />
      <Swiper />
      <Image
        src="/farmcs/workflow.png"
        alt="workflow"
        width={1800}
        height={1200}
        className='md:mt-[-100px] mt-3 ' />
      <Art/>

      <Tech />
      <div className='pb-5 h-2'></div>
    </>
  )
}
