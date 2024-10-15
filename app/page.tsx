// import Image from "next/image";
import Hero from "./../components/Hero"
import Camp from '@/components/Camp';
import Guide from '@/components/Guide';
import Features from '@/components/Features';
import GetApp from '@/components/GetApp';
import VideoSection from './../components/VideoSection';
import Swiper from '@/components/Swiper';



export default function Home() {
  return (

    <>
      <VideoSection/>
      <Hero />
      <Camp />
      <Guide />
      {/* <Swiper /> */}
      <Features />
      <GetApp/>
    </>

  );
}
