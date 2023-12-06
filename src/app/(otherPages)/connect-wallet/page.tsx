
//Import Components 
import Heading from "@/components/connectWalletComponents/Heading";
import SwapBtnSection from "@/components/connectWalletComponents/SwapBtnSection";

const page = () => {
    return ( 
        <main className="h-screen w-full">
            <div className="max-w-[60rem] mx-auto bg-white">
                <Heading />
                <SwapBtnSection />
            </div>
        </main>
     );
}
 
export default page;