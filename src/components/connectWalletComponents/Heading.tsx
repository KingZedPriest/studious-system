"use client";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import Image from "next/image";
import { toast } from "sonner";
//Import Images
import logo from "../../../public/logo.png";
import metaMask from "../../../public/metaMask.svg";

const Heading = () => {
  const [isMetamaskInstalled, setIsMetamaskInstalled] =
    useState<boolean>(false);
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [account, setAccount] = useState<string | null>(null);

  useEffect(() => {
    // Check if Metamask is installed
    if (typeof window.ethereum !== "undefined") {
      // Enable Metamask provider
      window.ethereum.enable().then(() => {
        const provider = new ethers.BrowserProvider(window.ethereum);
        provider.listAccounts().then((accounts: string | any[]) => {
          // Check if the user is already connected
          if (accounts.length > 0) {
            setAccount(accounts[0]);
            setIsConnected(true);
          }
        });

        // Listen for account changes
        window.ethereum.on("accountsChanged", (accounts: string[]) => {
          if (accounts.length > 0) {
            setAccount(accounts[0]);
            setIsConnected(true);
          } else {
            setAccount(null);
            setIsConnected(false);
          }
        });
      });
    } else {
      setIsMetamaskInstalled(false);
    }
  }, []);

  const connectWallet = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccount(accounts[0]);
    //   console.log(account);
      setIsConnected(true);
      toast.success("Wallet Was Connected");
    } catch (error) {
      console.error("Error connecting wallet:", error);
    }
  };
  return (
    <main className="flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8">
      <Image src={logo} alt="logo" className="w-10 sm:w-14 md:w-18" />
      <div className="flex gap-x-2">
        {isConnected && <Image src={metaMask} alt="" className="w-10" />}
        <button
          onClick={connectWallet}
          className={`bg-accentBlue rounded-md p-3 font-bold border-2 border-accentBlue hover:bg-inherit hover:text-accentBlue duration-500`}
        >
          {isConnected ? "Connected" : "Connect Wallet"}
        </button>
      </div>
    </main>
  );
};

export default Heading;
