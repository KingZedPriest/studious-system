import Link from "next/link";
import Image from "next/image";
import { generateRandomPercentage } from "@/utils/RandomNumber";
//Import Needed Components
import Heading from "@/components/landingPageComponents/Heading";
import LogoArea from "@/components/landingPageComponents/LogoArea";
import TopHeader from "@/components/landingPageComponents/TopHeader";
import Form from "@/components/landingPageComponents/Form";
import VideoSection from "@/components/landingPageComponents/Video";
import LiveData from "@/components/landingPageComponents/LiveData";
import Performance from "@/components/landingPageComponents/Performance";
import Quarterly from "@/components/landingPageComponents/Quarterly";
import History from "@/components/landingPageComponents/History";
import Exchange from "@/components/landingPageComponents/Exchange";
import Footer from "@/components/landingPageComponents/Footer";
//Import Needed Images
import googleIcon from "../../public/gg-rating.png";
export default function Home() {
  const randomPercentage = generateRandomPercentage();
  return (
    <main className="">
      <Heading />
      <LogoArea />
      <div className="max-w-[90rem] mx-auto">
        <p className="text-[0.65rem] md:text-xs font-[200] text-textBlue my-6 py-2">
          Home / <span className="ml-6">Carlive Chain</span>
        </p>
        <div className="my-4">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">$ 0.0000160</h1>
          <p className="text-textGreen font-bold text-sm sm:text-base md:text-lg">{randomPercentage} <span className="text-xs sm:text-sm md:text-base text-textBlue font-normal">Last 24h</span></p>
          <div className="flex gap-x-2 md:gap-x-3 mt-4">
            <Link href="" className="bg-accentBlue px-4 sm:px-6 py-2 md:py-3 text-xs sm:text-sm md:text-base rounded-sm hover:bg-bglightBlue border border-accentBlue duration-500">Claim IOV</Link>
            <Link href="" className="bg-bglightBlue px-4 sm:px-6 py-2 md:py-3 text-xs sm:text-sm md:text-base rounded-sm hover:bg-accentBlue border border-bglightBlue duration-500">Trade Futures</Link>
            <Link href="" className="bg-accentBlue px-4 sm:px-6 py-2 md:py-3 text-xs sm:text-sm md:text-base rounded-sm hover:bg-bglightBlue border border-accentBlue duration-500">Swap IOV</Link>
          </div>        
        </div>
        <div className="bg-lightBlue rounded-lg pb-2">
          <TopHeader />
          <Form />
          <div className="my-4 px-4 sm:px-6 lg:px-8">
            <Image src={googleIcon} alt="Google Rating"/>
          </div>
          <VideoSection />
          <LiveData />
          <Performance />
          <Quarterly />
          <History />
          <Exchange />
          <Footer />
        </div>
      </div>
    </main>
  );
}
