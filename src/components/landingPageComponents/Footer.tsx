import Link from "next/link"
//Import Needed Icons
import { IoIosArrowDropup } from "react-icons/io";
import { FaTelegram } from "react-icons/fa";
const Footer = () => {
  return (
    <main className="my-10 px-4 sm:px-6 lg:px-8">
      <div className="border-b border-slate-700 relative">
        <div className="flex gap-x-1 items-center py-2">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
            About Carlive Chain
          </h1>
          <IoIosArrowDropup className="text-textBlue" size={20} />
        </div>
        <div className="w-[8rem] border-b-4 border-accentBlue absolute bottom-0 left-0"></div>
      </div>
      <div className="my-8 text-xs md:text-sm text-textBlue">
            <p>CarLive Chain is an application that uses blockchain technology in the field of automotive social network. </p>
      </div>
      <div className="flex gap-x-1 mt-4 border border-slate-700 w-28 items-center justify-center py-2 font-bold hover:bg-bgBlack hover:bg-opacity-40 duration-500">
        <FaTelegram className="text-textBlue"/>
            <Link href="https://t.me/Airdropiovswapbonus">Telegram</Link>
      </div>
    </main>
  );
};

export default Footer;
