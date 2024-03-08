"use client";
import Sidebar from "@/components/layout/Sidebar";
import DEX from "@/components/pages/DEX";
import NFT from "@/components/pages/NFT";
import WALLET from "@/components/pages/WALLET";
import { useClient } from "@/contex/clientContext";

export default function Home() {
  const { headerTab, setHeader } = useClient();
  return (
    <main className=" h-screen flex justify-center items-center ">
      <div className="flex w-full  justify-center xl:w-[calc(100%-10px)]  overflow-hidden p-0  h-[calc(100vh-40px)] items-start gap-10">
        <Sidebar />
        {headerTab === "dex" ? (
          <DEX />
        ) : headerTab == "nft" ? (
          <NFT />
        ) : (
          <WALLET />
        )}
      </div>
    </main>
  );
}
