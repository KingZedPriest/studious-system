import Video from 'next-video';
//Import Images and Videos
import introVideo from "../../../videos/introVideo.mp4";

const VideoSection = () => {
    return ( 
        <main className='mt-10 px-4 sm:px-6 lg:px-8'>
            <Video src={introVideo} className='h-96'/>
        </main>
     );
}
 
export default VideoSection;