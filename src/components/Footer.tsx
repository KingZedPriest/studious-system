import Image from "next/image";
import Link from "next/link";

//Import Needed Images
import bodyImg from "../../public/slider1-graphic1.png";
import logo from "../../public/logo.png";
import securePay from "../../public/securepayLogo.png";

const Footer = () => {
    return ( 
        <main>
            <Image src={bodyImg} alt="smartchain" className="mx-auto mt-10"/>
            <div className="bg-[#2D2727] flex flex-col gap-y-3 px-4 sm:px-6 lg:px-8 py-10">
                <div className="flex gap-x-3 items-center">
                    <Image src={logo} alt="smartchain logo" className="w-12 sm:w-12 md:w-14"/>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold mt-2">Carlive Chain</p>
                </div>
                <Image src={securePay} alt="Secure Pay Logo" className="w-20 sm:w-24 md:w-28 lg:w-32"/>
                <Link href="" className="text-xs sm:text-sm md:text-base lg:text-lg font-bold">About</Link>
                <Link href="" className="text-xs sm:text-sm md:text-base lg:text-lg font-bold">Contact</Link>
                <Link href="" className="text-xs sm:text-sm md:text-base lg:text-lg font-bold">Brand</Link>
                <Link href="" className="text-xs sm:text-sm md:text-base lg:text-lg font-bold">Blog</Link>
                <Link href="" className="text-xs sm:text-sm md:text-base lg:text-lg font-bold">Community</Link>
                <Link href="" className="text-xs sm:text-sm md:text-base lg:text-lg font-bold">Litepaper</Link>
                <Link href="" className="text-xs sm:text-sm md:text-base lg:text-lg font-bold">Terms Of Service</Link>
            </div>
        </main>
     );
}
 
export default Footer;