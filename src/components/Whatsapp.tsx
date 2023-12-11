import Link from "next/link";
//Import Needed Icons
import { FaWhatsapp } from "react-icons/fa";

const Whatsapp = () => {
    return ( 
        <main className="fixed bottom-10 left-4 sm:left-6 md:left-8 lg:left-10 p-2 bg-white z-10 rounded-[50%] cursor-pointer shadow-md">
            <Link href="https://wa.me/message/OGSTKAJGHEDSN1" target="_black"><FaWhatsapp size={24} className="text-[#25D366]"/></Link>
        </main>
     );
}
 
export default Whatsapp;