import Image from "next/image";

//Import Images
import logo from "../../../public/logo.png"
const Heading = () => {
    return ( 
        <main className="flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8">
            <Image src={logo} alt="logo" className="w-10 sm:w-14 md:w-18"/>
            <button className="bg-accentBlue rounded-md p-3 font-bold border-2 border-accentBlue hover:bg-inherit hover:text-accentBlue duration-500">Connect Wallet</button>
        </main>
     );
}
 
export default Heading;