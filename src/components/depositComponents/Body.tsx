"use client"
import Image from "next/image";
import { useRef, useState, useEffect } from 'react';
import { redirect } from 'next/navigation'
import { toast } from "sonner";
//Import Needed Images
import bnb from "../../../public/bnb.png";
//Import Needed Icons
import { BsCopy } from "react-icons/bs";


const Body = () => {
    //States for the time
    const initialTime = parseInt(
        typeof window !== 'undefined' ? window.localStorage.getItem('countdown') || '1200' : '1200',
        10
      );
    const [timeFinish, setTimeFinish] = useState<boolean>(false)
    const [time, setTime] = useState<number>(initialTime);
    ///For the text to copy
    const textToCopyRef = useRef<HTMLParagraphElement>(null);
    //The Copy Function
    const handleCopyClick = () => {
        if (textToCopyRef.current) {
          const range = document.createRange();
          const selection = window.getSelection();
    
          range.selectNodeContents(textToCopyRef.current);
          selection?.removeAllRanges();
          selection?.addRange(range);
    
          try {
            document.execCommand('copy');
            toast.success('Wallet address copied to clipboard!')
          } catch (err) {
            toast.error("Unable to copy text, try again later!")
          }
    
          selection?.removeAllRanges();
        }
      };
      //Time Function
      useEffect(() => {
        const interval = setInterval(() => {
          if (time > 0) {
            setTime((prevTime) => prevTime - 1);
    
            if (typeof window !== 'undefined') {
              window.localStorage.setItem('countdown', String(time - 1));
            }
          } else {
            setTimeFinish(true)
            if (typeof window !== 'undefined') {
              window.localStorage.setItem('countdown', '1200');
            }
          }
        }, 1000);
    
        return () => clearInterval(interval);
      }, [time]);
    
      const formatTime = (seconds: number): string => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
      }
      timeFinish && redirect('/connect-wallet');
    return ( 
        <main className="py-2 px-4 sm:px-6 lg:px-8 mt-10">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-black font-bold text-center">Deposit</p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-bgBlue font-bold  mt-10">Wallet</p>
            <div className="mt-8 blackShadow rounded-2xl flex items-center gap-x-5 px-4 py-2">
                <Image src={bnb} alt="bnb image" className="w-8 sm:text-10 md:w-14"/>
                <div>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg text-black font-semibold">0.00</p>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg text-bgBlue font-medium">BNB Smart Chain</p>
                </div>
            </div>
            <div className="mt-12">
               <p className="text-xs sm:text-sm md:text-base lg:text-lg text-bgBlue font-medium">Network: BNB Smart Chain BEP20</p>
                <p className="mt-6 text-xs sm:text-sm md:text-base lg:text-lg text-bgBlue font-medium">Confirmation Block(s):  <span className="ml-4">32/32 </span>  </p>  
            </div>
           <p className="text-sm sm:text-base md:text-lg lg:text-xl text-bgBlue font-bold mt-6">Address</p>
           <div className="rounded-l-2xl blackShadow flex gap-x-3 justify-between items-center mt-6 px-4 py-2">
                <p ref={textToCopyRef} className="text-black text-xs sm:text-sm md:text-base lg:text-lg min-w-[9rem] font-medium break-words whitespace-pre-line">0xD501E3b98103433B995f59198CdE1a44828Aaf7c</p>
                <BsCopy onClick={handleCopyClick} size={20} className="text-black cursor-pointer "/>
           </div>
           <div className="flex flex-col mt-10 gap-y-2 items-center">
                <div className="spinner"></div>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-bgBlue"><span className="text-xs sm:text-sm md:text-base lg:text-lg font-medium">Waiting for transaction </span>{formatTime(time)}</p>
           </div>
           <form>
                <input type="text" name="transactionID" id="transactionID" className="text-bgBlue caret-bgBlue focus:outline-none w-full px-4 py-3 mt-6 blackShadow rounded-2xl placeholder:text-xs md:placeholder:text-sm" placeholder="Enter Your Transaction ID"/>
                <input type="submit" value="Confirm" className="font-bold w-full bg-bgBlue rounded-2xl mt-6 py-3 md:py-4 cursor-pointer hover:bg-slate-700 duration-500" />
           </form>
           <p className="mt-6 text-xs sm:text-sm md:text-base lg:text-lg text-bgBlue ">Minimum Deposit <span className="font-bold">0.25 BNB</span></p>
           <p className="mt-4 text-xs sm:text-sm lg:text-base text-bgBlue">If a deposit is below the required minimum the fund will not be credited to your wallet.</p>
        </main>
     );
}
 
export default Body;