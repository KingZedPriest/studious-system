
//Import Components 
import Heading from "@/components/connectWalletComponents/Heading";
import SwapBtnSection from "@/components/connectWalletComponents/SwapBtnSection";
import Body from "@/components/connectWalletComponents/Body";

const page = () => {
    return ( 
        <main className="h-screen w-full overflow-y-auto">
            <div className="max-w-[60rem] mx-auto bg-white">
                <Heading />
                <SwapBtnSection />
                <Body />
            </div>
        </main>
     );
}
 
export default page;