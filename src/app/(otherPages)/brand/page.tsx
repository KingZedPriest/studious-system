
//Import Needed Components
import Heading from "@/components/BrandComponents/Heading";
import Body from "@/components/BrandComponents/Body";
import Footer from "@/components/Footer";

const page = () => {
    return ( 
        <main className="h-screen w-full overflow-y-auto">
           <div className="max-w-[60rem] mx-auto bg-white">
                <Heading />
                <Body />
                <Footer />
            </div> 
        </main>
     );
}
 
export default page;