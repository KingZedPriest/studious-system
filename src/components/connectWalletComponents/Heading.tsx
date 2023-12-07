"use client"
import { useState } from "react";
import { useAccount } from 'wagmi';
import Image from "next/image";
import Link from "next/link";

//Import needed component
import NotConnected from "./NotConnected";
//Import Images
import logo from "../../../public/logo.png";

export default function ConnectButton() {
  const [walletAddress, setWalletAddress] = useState<any>("")
  const [isDisconnected, setIsDisconnected] = useState<boolean>(true)
  //Functions
  const account = useAccount({
    onConnect({ address }) {
      setWalletAddress(address)
      setIsDisconnected(false)
    },
    onDisconnect() {
      setIsDisconnected(true)
    },
  })
  return (
    <main className="py-2 px-2 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center">
        <Link href="/"><Image src={logo} alt="IOV Logo" className="w-12 sm:w-12 md:w-16 lg:w-18"/> </Link>
        {!isDisconnected && <p className="text-black"><w3m-button /></p>}
      </div>
      <div>
          {isDisconnected && <NotConnected />}
      </div>
    </main>
  
  )
}
