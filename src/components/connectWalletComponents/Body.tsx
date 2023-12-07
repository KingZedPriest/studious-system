"use client"
import Link from "next/link";
import useStore from "@/store/store";
//Import Icons
import { HiFire } from "react-icons/hi";
import { IoMdSettings } from "react-icons/io";
import { RxCounterClockwiseClock } from "react-icons/rx";
import { MdOutlineRefresh } from "react-icons/md";
import { IoIosArrowUp } from "react-icons/io";
import { BsFillCreditCardFill } from "react-icons/bs";

const Body = () => {
  //For the numbers
  const { number, setNumber } = useStore();

  //For the Amount to send and everything under
  let gasFee;
  let balance;
  let quantity;
  switch (number) {
    case 25000000:
      gasFee = 0.25;
      quantity = 25;
      balance = 25;
      break;
    case 50000000:
      gasFee = 0.3;
      quantity = 50;
      balance = 48;
      break;
    case 75000000:
      gasFee = 0.5;
      quantity = 75;
      balance = 119;
      break;
    case 100000000:
      gasFee = 1.0;
      quantity = 100;
      balance = 396.98;
      break;
    default:
      gasFee = 0;
      quantity = 0;
      balance = 0;
  }
  return (
    <main className="py-2 px-4 sm:px-6 lg:px-8 mt-10">
      <p className="text-black text-sm sm:text-base md:text-lg lg:text-xl font-bold">
        Swap
      </p>
      <p className="text-accentBlue font-semibold mt-4 text-xs sm:text-sm md:text-base">
        Trade token in an instant
      </p>
      <div className="flex gap-x-3 items-center mt-4">
        <HiFire size={20} className="text-slate-700 cursor-pointer" />
        <IoMdSettings size={20} className="text-slate-700 cursor-pointer" />
        <RxCounterClockwiseClock
          size={16}
          className="text-slate-700 cursor-pointer"
        />
        <MdOutlineRefresh
          size={20}
          className="text-gray-400 cursor-not-allowed"
        />
      </div>
      <form className="mt-10">
        <div className="flex justify-between items-end">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-700 font-bold">
            ETH
          </p>
          <p className="text-accentBlue font-semibold text-xs sm:text-sm md:text-base">
            Balance :
          </p>
        </div>
        <input
          className="h-20 px-2 text-slate-700 mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-right w-full font-bold blackShadow rounded-2xl bg-accentBlue bg-opacity-10"
          type="number"
          name="balance"
          id="balance"
          disabled
          value={balance}
        />
        <div className="flex cursor-not-allowed items-center justify-center blackShadow rounded-[50%] my-10 bg-accentBlue bg-opacity-10 mx-auto h-8 w-8">
          <IoIosArrowUp className="text-accentBlue" size={24} />
        </div>
        <div className="flex justify-between items-end mt-10">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-700 font-bold">
            IOV
          </p>
          <p className="text-accentBlue font-semibold text-xs sm:text-sm md:text-base">
            Balance :
          </p>
        </div>
        <input
          className="h-20 px-2 text-slate-700 mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-right w-full font-bold blackShadow rounded-2xl bg-accentBlue bg-opacity-10"
          type="number"
          name="balance"
          id="balance"
          disabled
          value={number}
        />
        <div className="flex justify-between mt-10">
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-700 font-bold">
            Quantity {quantity}%
          </p>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-700 font-bold">
            Gas fee: {gasFee} BNB
          </p>
        </div>
        <div className="mt-6 flex justify-between">
          <button
            type="button" onClick={() => setNumber(25000000)}
            className={`font-bold px-4 sm:px-6 md:px-8 lg-px-10 py-2 rounded-lg bg-${
              number === 25000000 ? "inherit text-accentBlue" : "accentBlue"
            } border border-accentBlue hover:bg-inherit duration-500 hover:text-accentBlue text-xs md:text-sm lg:text-base`}
          >
            25%
          </button>
          <button
            type="button" onClick={() => setNumber(50000000)}
            className={`font-bold px-4 sm:px-6 md:px-8 lg-px-10 py-2 rounded-lg bg-${
              number === 50000000 ? "inherit text-accentBlue" : "accentBlue"
            } border border-accentBlue hover:bg-inherit duration-500 hover:text-accentBlue text-xs md:text-sm lg:text-base`}
          >
            50%
          </button>
          <button
            type="button" onClick={() => setNumber(75000000)}
            className={`font-bold px-4 sm:px-6 md:px-8 lg-px-10 py-2 rounded-lg bg-${
              number === 75000000 ? "inherit text-accentBlue" : "accentBlue"
            } border border-accentBlue hover:bg-inherit duration-500 hover:text-accentBlue text-xs md:text-sm lg:text-base`}
          >
            75%
          </button>
          <button
            type="button" onClick={() => setNumber(100000000)}
            className={`font-bold px-4 sm:px-6 md:px-8 lg-px-10 py-2 rounded-lg bg-${
              number === 100000000 ? "inherit text-accentBlue" : "accentBlue"
            } border border-accentBlue hover:bg-inherit duration-500 hover:text-accentBlue text-xs md:text-sm lg:text-base`}
          >
            100%
          </button>
        </div>
        <button className="w-full mt-10 bg-gray-300 rounded-2xl font-bold text-xs sm:text-sm py-3 md:text-base cursor-not-allowed">
          Swap
        </button>
        <p className="my-4 text-red-500 text-xs sm:text-sm md:text-base text-center font-bold">
          Insufficient BNB Smartchain
        </p>
        <Link
          href="deposit-bnb"
          className="bg-accentBlue border-2 border-accentBlue hover:bg-inherit duration-500 hover:text-accentBlue font-bold flex items-center justify-center gap-x-2 py-3 w-full text-xs sm:text-sm md:text-base rounded-2xl"
        >
          Deposit BNB <BsFillCreditCardFill size={20} />
        </Link>
      </form>
    </main>
  );
};

export default Body;
