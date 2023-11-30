//Import Needed Components
import Heading from "@/components/landingPageComponents/Heading";
import LogoArea from "@/components/landingPageComponents/LogoArea";
import TopHeader from "@/components/landingPageComponents/TopHeader";
import Form from "@/components/landingPageComponents/Form";
import VideoSection from "@/components/landingPageComponents/Video";
export default function Home() {
  return (
    <main className="">
      <Heading />
      <LogoArea />
       <div className='max-w-[90rem] mx-auto'>
          <p className="text-[0.65rem] md:text-xs font-[200] text-textBlue my-6 py-2">Home  / <span className="ml-6">Carlive Chain</span></p>
          <div className="bg-lightBlue rounded-lg">
            <TopHeader />
            <Form />
            <VideoSection />
          </div>
       </div>
    </main>
  )
}
