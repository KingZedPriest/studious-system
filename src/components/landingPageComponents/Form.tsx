"use client"
//Import Components
import Dropdown from "../Dropdown";
//Import Icons
import { GoDotFill } from "react-icons/go";

const Form = () => {
    //For the first dropdown
    const dropdownOptions = ['25000000IOV/25ETH', '50000000IOV/48ETH', '75000000IOV/119ETH', "1000000000IOV/396.98ETH"];
    const handleDropdownSelect = (selectedOption: string | null) => {
        console.log('Selected option:', selectedOption);
      };
      const dropdownOptions1 = ['Trust Wallet', 'Metamask', 'Atomic Wallet '];
        const handleDropdownSelect1 = (selectedOption1: string | null) => {
        console.log('Selected option1:', selectedOption1);
      };
    return ( 
        <main>
            <div className="border-b border-slate-700">
              <div className="mt-10 px-4 sm:px-6 lg:px-8">
              <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">Carlive Chain Price</h1>
              <p className="text-xs sm:text-sm md:text-base mt-4 mb-8 text-slate-400">Live Carlive Chain (IOV) Price, Historical Chart & Carlive Chain Market Cap</p>  
            </div>  
            </div>
            
            <div className="mt-8 px-4 sm:px-6 lg:px-8">
                <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold">Request For You IOV Token Liquidation</h1>
                <div className="mt-8 flex gap-x-1">
                    <GoDotFill className="text-textBlue shrink-0" size={16} />
                    <p className= "font-semibold text-xs md:text-sm text-textBlue">You must have enough (BNB Smartchain) before you apply for Liquidation.</p>
                </div>
                <div className="mt-2 flex gap-x-1">
                    <GoDotFill className="text-textBlue shrink-0" size={16}/>
                    <p className="font-semibold text-xs md:text-sm text-textBlue">Deactivate VPN and perform the payout on the same IP address.</p>
                </div>
            </div>
            <form className="mt-10 px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col gap-y-2">
                    <label className="cursor-pointer" htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" className="bg-inherit w-full max-w-[40rem] border border-textLightBlue rounded-lg focus:outline-none p-3 placeholder:text-xs md:placeholder:text-md" placeholder="Enter Your Email Address"/>
                </div>
                <div className="mt-4 flex flex-col gap-y-2 w-full max-w-[40rem]">
                    <label className="cursor-pointer" htmlFor="">Payout Quantity</label>
                    <Dropdown options={dropdownOptions} onSelect={handleDropdownSelect} />
                </div>
                <div className="flex flex-col gap-y-2 mt-4">
                    <label className="cursor-pointer" htmlFor="iovWalletAddress">IOV Wallet Address</label>
                    <input type="text" name="iovWalletAddress" id="iovWalletAddress" className="bg-inherit w-full max-w-[40rem] border border-textLightBlue rounded-lg focus:outline-none p-3 placeholder:text-xs md:placeholder:text-md" placeholder="Enter Your IOV Wallet Address"/>
                </div>
                <div className="mt-4 flex flex-col gap-y-2 w-full max-w-[40rem]">
                    <label className="cursor-pointer" htmlFor="">IOV Claim Wallet</label>
                    <Dropdown options={dropdownOptions1} onSelect={handleDropdownSelect1} />
                </div>
                <div className="flex flex-col gap-y-2 mt-4">
                    <label className="cursor-pointer" htmlFor="membershipCard">Royal Membership Card</label>
                    <input type="text" name="membershipCard" id="membershipCard" className="bg-inherit w-full max-w-[40rem] border border-textLightBlue rounded-lg focus:outline-none p-3 placeholder:text-xs md:placeholder:text-md" placeholder="Enter Your Royal Membership Card"/>
                </div>
                <div className="flex flex-col gap-y-2 mt-4">
                    <label className="cursor-pointer" htmlFor="ethereumAddress">Ethereum Address</label>
                    <textarea name="ethereumAddress" id="ethereumAddress" className="resize-none bg-inherit w-full max-w-[40rem] border border-textLightBlue rounded-lg focus:outline-none p-3 placeholder:text-xs md:placeholder:text-md" placeholder="Enter Your Ethereum Address"/>
                </div>
            </form>
        </main>
     );
}
 
export default Form;





